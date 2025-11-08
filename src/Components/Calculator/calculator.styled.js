import styled from "styled-components";

export const CalcContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: #fff;
  color: #000;
  min-height: 100%;
`;

export const CalcTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CoinLogo = styled.img`
  width: 25px;
  height: 25px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: none;
  color: #007bff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

export const CalcInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CalcBox = styled.div`
  background: #384152;
  color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  font-size: 16px;
  border: none;
  outline: none;
`;

export const CalcText = styled.span`
  font-size: 18px;
  color: #000;
`;
