import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ExchangesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  margin-top: 20px;
  text-align: center;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    color: #e2e8f0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #3b82f6;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #60a5fa;
  }
`;
