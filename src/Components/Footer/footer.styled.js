import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterWrap = styled.footer`
  width: 100%;
  background: #BFDBFE;         
  padding: 36px 16px 48px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PillNav = styled.nav`
  max-width: 750px;
   width: 100%;
  margin: 0 auto;
  border: 4px solid #0f172a;        
  background: #BFDBFE;
  border-radius: 22px;
  padding: 20px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 640px) {
    gap: 18px;
    padding: 12px 16px;
  }
`;

export const PillLink = styled(NavLink)`
  color: #0f172a;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.9;
  transition: color 0.2s ease-in;

  &:hover { 
    color: #36363650;
    }
`;

export const Credits = styled.p`
  max-width: 900px;
  margin: 18px auto 0;
  text-align: center;
  color: #0f172a;
  font-weight: 100;
  font-size: 14px;
`;

export const Copy = styled.div`
  max-width: 900px;
  margin: 8px auto 0;
  text-align: center;
  color: #0f172a;
  font-weight: 100;
  font-size: 14px;
`;
