import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10%;
  min-height: 60vh;
  background: #fff;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
`;

export const HeroLeft = styled.div`
  flex: 1;
  max-width: 550px;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const HeroText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const HeroHighlight = styled.span`
  color: #e66;
  font-weight: 600;
`;

export const WalletButton = styled.button`
  background: transparent;
  color: #007bff;
  border: 2px solid #007bff;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: rgba(0, 123, 255, 0.1);
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
  }

  &:active {
    transform: scale(0.97);
    background: rgba(0, 123, 255, 0.2);
  }
`;
export const HeroImage = styled.img`
  width: 45%;
  max-width: 600px;
  height: auto;
  object-fit: contain;

  @media (max-width: 900px) {
    width: 80%;
    margin-top: 2rem;
  }
`;

export const WalletSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export const WalletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const WalletItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
`;

export const WalletItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WalletEmpty = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  border-radius: 8px;
  background: #fff;
`;
