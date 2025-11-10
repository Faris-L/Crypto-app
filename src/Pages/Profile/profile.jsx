import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal, Button, Checkbox, NumberInput, Group, Text, Loader } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  HeroContainer,
  HeroLeft,
  HeroTitle,
  HeroText,
  HeroHighlight,
  HeroImage,
  WalletButton,
  WalletSection,
  WalletList,
  WalletItem,
  WalletItemInfo,
  WalletEmpty
} from "./profile.styled";
import cryptoImage from "../../assets/profileLogo.png";
import { getCoins } from "../../services/coins";

const WALLET_KEY = "cryptoWallet";

const readWallet = () => {
  try {
    const raw = localStorage.getItem(WALLET_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const writeWallet = (arr) => {
  localStorage.setItem(WALLET_KEY, JSON.stringify(arr));
  return arr;
};

const Profile = () => {
  const queryClient = useQueryClient();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selections, setSelections] = useState({});

  const { data: topData, isLoading: coinsLoading } = useQuery({
    queryKey: ["topCoins", 20],
    queryFn: () => getCoins(20),
    staleTime: 1000 * 60 * 5,
  });

  const coins = topData?.coins ?? [];

  const { data: wallet = [] } = useQuery({
    queryKey: ["wallet"],
    queryFn: () => readWallet(),
    staleTime: Infinity,
  });

  const toggleSelection = (uuid) => {
    setSelections((s) => {
      const copy = { ...s };
      copy[uuid] = copy[uuid] ? { ...copy[uuid], checked: !copy[uuid].checked } : { checked: true, amount: 0 };
      return copy;
    });
  };

  const setAmount = (uuid, value) => {
    setSelections((s) => {
      const copy = { ...s };
      const prev = copy[uuid] ?? { checked: false, amount: 0 };
      copy[uuid] = { ...prev, amount: value ?? 0 };
      return copy;
    });
  };

  const addMutation = useMutation({
    mutationFn: () => {
      const toAdd = Object.entries(selections)
        .filter(([, v]) => v.checked && Number(v.amount) > 0)
        .map(([uuid, v]) => {
          const coin = coins.find((c) => c.uuid === uuid);
          return coin
            ? {
                uuid: coin.uuid,
                name: coin.name,
                symbol: coin.symbol,
                iconUrl: coin.iconUrl,
                amount: Number(v.amount),
                price: Number(coin.price || 0),
              }
            : null;
        })
        .filter(Boolean);

      const existing = readWallet();
      const merged = [...existing];

      toAdd.forEach((item) => {
        const idx = merged.findIndex((m) => m.uuid === item.uuid);
        if (idx === -1) merged.push(item);
        else merged[idx] = { ...merged[idx], amount: merged[idx].amount + item.amount };
      });

      writeWallet(merged);
      return merged;
    },
    onSuccess: (newWallet) => {
      queryClient.setQueryData(["wallet"], newWallet);
      setSelections({});
      setDrawerOpen(false);
      notifications.show({
        title: "Added to wallet",
        message: `Added ${newWallet.length ? "items" : ""} to your crypto wallet.`,
        color: "teal",
        autoClose: 2000,
        withCloseButton: false,
      });
    },
    onError: () => {
      notifications.show({
        title: "Error",
        message: "Failed to add to wallet.",
        color: "red",
      });
    },
  });

  const handleAdd = () => {
    const hasAnything = Object.values(selections).some((v) => v.checked && Number(v.amount) > 0);
    if (!hasAnything) {
      notifications.show({ title: "Nothing selected", message: "Please select coins and enter amounts.", color: "yellow" });
      return;
    }
    addMutation.mutate();
  };

  return (
    <>
      <HeroContainer>
        <HeroLeft>
          <HeroTitle>
            Buy Bitcoin
            <br /> & Crypto
          </HeroTitle>
          <HeroText>
            Sign up today and <HeroHighlight>buy 50+</HeroHighlight> cryptocurrencies in minutes
            <br />
            Get started with as little as <HeroHighlight>$10</HeroHighlight>
          </HeroText>
          <WalletButton onClick={() => setDrawerOpen(true)}>CRYPTO WALLET</WalletButton>
        </HeroLeft>

        <HeroImage src={cryptoImage} alt="Crypto App Preview" />
      </HeroContainer>

      <WalletSection>
        <Text weight={700} size="lg" style={{ marginBottom: 12 }}>
          Your Wallet
        </Text>

        {wallet.length === 0 ? (
          <WalletEmpty>
            <p>No coins added yet.</p>
            <Button variant="outline" onClick={() => setDrawerOpen(true)}>
              Add coins
            </Button>
          </WalletEmpty>
        ) : (
          <WalletList>
            {wallet.map((c) => (
              <WalletItem key={c.uuid}>
                <img src={c.iconUrl} alt={c.name} style={{ width: 44, height: 44, marginRight: 16 }} />
                <WalletItemInfo>
                  <div style={{ fontWeight: 700 }}>{c.name}</div>
                  <div style={{ color: "#666" }}>
                    {c.amount} {c.symbol} — ${(c.amount * c.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>
                </WalletItemInfo>
              </WalletItem>
            ))}
          </WalletList>
        )}
      </WalletSection>

      <Modal
  opened={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  title="Add to Wallet"
  size="70%"
  centered
  overlayOpacity={0.55}
  overlayBlur={2}
  transition="fade"
  transitionDuration={400}
  zIndex={5000}
>
  {coinsLoading ? (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
      <Loader color="blue" size="lg" />
    </div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 700 }}>Select coins to add</div>
      </div>

      <div style={{ overflowY: "auto", maxHeight: "56vh" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
              <th style={{ padding: "10px 8px" }}>Rank</th>
              <th style={{ padding: "10px 8px" }}>Name</th>
              <th style={{ padding: "10px 8px" }}>Price</th>
              <th style={{ padding: "10px 8px" }}>MarketCap</th>
              <th style={{ padding: "10px 8px" }}>Buy</th>
              <th style={{ padding: "10px 8px" }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              const sel = selections[coin.uuid] ?? { checked: false, amount: 0 };
              return (
                <tr key={coin.uuid} style={{ borderBottom: "1px solid #f1f1f1" }}>
                  <td style={{ padding: "14px 8px", width: 60 }}>{coin.rank}</td>
                  <td style={{ padding: "14px 8px", display: "flex", alignItems: "center", gap: 12 }}>
                    <img src={coin.iconUrl} alt={coin.name} style={{ width: 28, height: 28 }} />
                    <div>
                      <div style={{ fontWeight: 600 }}>{coin.name}</div>
                      <div style={{ color: "#777", fontSize: 13 }}>{coin.symbol}</div>
                    </div>
                  </td>
                  <td style={{ padding: "14px 8px" }}>${Number(coin.price).toLocaleString()}</td>
                  <td style={{ padding: "14px 8px" }}>${Number(coin.marketCap).toLocaleString()}</td>
                  <td style={{ padding: "10px 8px" }}>
                    <Checkbox checked={Boolean(sel.checked)} onChange={() => toggleSelection(coin.uuid)} />
                  </td>
                  <td style={{ padding: "10px 8px", width: 140 }}>
                    <NumberInput
                    value={sel.amount}
                    onChange={(v) => setAmount(coin.uuid, v)}
                    min={0}
                    step={1}
                    precision={0}
                    clampBehavior="strict"
                    placeholder="0"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Group position="right" style={{ marginTop: 8 }}>
        <Button onClick={handleAdd} loading={addMutation.isLoading}>
          ADD
        </Button>
      </Group>
    </div>
  )}
</Modal>

    </>
  );
};

export default Profile;
