import { useState } from "react";
import { Drawer } from "@mantine/core";
import {
  CalcContainer,
  CalcTitle,
  CalcInputs,
  CalcBox,
  CalcText,
  CloseBtn,
  CoinLogo,
} from "./calculator.styled";

const CalculatorDrawer = ({ opened, onClose, coin }) => {
  const [amount, setAmount] = useState(0);
  const price = coin?.price || 0;
  const total = amount * price;

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="right"
      size="md"
      overlayProps={{
        opacity: 0.55,
        blur: 3,
      }}
      styles={{
        content: { zIndex: 2000, borderRadius: "10px" },
      }}
    >
      <CalcContainer>
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <CalcTitle>
          {coin?.name || "Coin"}{" "}
          {coin?.iconUrl && <CoinLogo src={coin.iconUrl} alt={coin.name} />}
        </CalcTitle>

        <hr style={{ width: "100%", margin: "20px 0" }} />

        <CalcInputs>
          <CalcBox
            as="input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <CalcText>X</CalcText>
          <CalcBox>${Number(price).toLocaleString()}</CalcBox>
          <CalcText>=</CalcText>
          <CalcBox>${total.toLocaleString()}</CalcBox>
        </CalcInputs>
      </CalcContainer>
    </Drawer>
  );
};

export default CalculatorDrawer;
