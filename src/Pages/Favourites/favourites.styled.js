import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const GoToCoinsBtn = styled(NavLink)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  font-weight: 900;
  transition: all 0.4s ease-in-out;

  &:hover {
  border: solid 2.5px black;
  }
`;
