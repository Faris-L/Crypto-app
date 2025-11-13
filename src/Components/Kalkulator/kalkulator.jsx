import { useEffect, useMemo, useState } from "react";
import {
  Backdrop,
  Modal,
  Header,
  Title,
  CoinIcon,
  CloseBtn,
  Body,
  InputsRow,
  Input,
  Readonly,
  Eq,
  X,
  Divider,
  Label,
} from "./kalkulator.styled"

const fmtUSD = (n, d = 2) =>
  isFinite(n) ? `$ ${Number(n).toLocaleString(undefined, { maximumFractionDigits: d })}` : "$ 0";

const parseNum = (v) => {
  if (typeof v === "number") return v;
  const s = String(v).replaceAll(",", ".").replace(/[^\d.-]/g, "");
  const num = Number(s);
  return isFinite(num) ? num : 0;
};

export default function CalculatorModal({ open, onClose, coin }) {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (open) setAmount("");
  }, [open, coin?.uuid]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !coin) return null;

  const price = Number(coin.price);              
  const qty = parseNum(amount);
  const total = qty * price;

  return (
    <Backdrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>
            {coin.name} <CoinIcon src={coin.iconUrl} alt={coin.name} />
          </Title>
          <CloseBtn onClick={onClose}>×</CloseBtn>
        </Header>

        <Divider />

        <Body>
          <InputsRow>
            <div>
              <Label>Amount</Label>
              <Input
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                inputMode="decimal"
              />
            </div>

            <X>×</X>

            <div>
              <Label>Price</Label>
              <Readonly>{fmtUSD(price, 3)}</Readonly>
            </div>

            <Eq>=</Eq>

            <div>
              <Label>Total</Label>
              <Readonly>{fmtUSD(total, 2)}</Readonly>
            </div>
          </InputsRow>
        </Body>
      </Modal>
    </Backdrop>
  );
}
