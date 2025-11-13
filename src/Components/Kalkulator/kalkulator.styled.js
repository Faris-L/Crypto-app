import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.45);
  display: grid; place-items: center;
  z-index: 999;
`;

export const Modal = styled.div`
  width: min(680px, 92vw);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 18px;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 600;
  display: flex; align-items: center; gap: 10px;
`;

export const CoinIcon = styled.img`
  width: 20px; height: 20px; object-fit: contain;
`;

export const CloseBtn = styled.button`
  appearance: none; border: 0; background: transparent;
  font-size: 26px; line-height: 1; cursor: pointer;
  color: #64748b;
  &:hover { color: #0f172a; transform: scale(1.05); }
`;

export const Divider = styled.div`
  height: 1px; background: #e5e7eb;
`;

export const Body = styled.div`
  padding: 18px;
`;

export const InputsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: end;
  gap: 12px;
`;

export const Label = styled.div`
  font-size: 12px; color: #64748b; margin: 0 0 6px 6px;
`;

const fieldCss = `
  width: 100%;
  height: 44px;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 16px;
  display: flex; align-items: center;
  box-shadow: inset 0 0 0 1px #cbd5e1;
  background: #111827; color: #fff;
`;

export const Input = styled.input`
  ${fieldCss}
  outline: none;
  &:focus { box-shadow: inset 0 0 0 2px #3b82f6; }
`;

export const Readonly = styled.div`
  ${fieldCss}
  background: #1f2937; color: #fff;
`;

export const X = styled.div`
  font-size: 22px; color: #94a3b8; margin: 0 4px 10px;
`;

export const Eq = styled(X)``;
