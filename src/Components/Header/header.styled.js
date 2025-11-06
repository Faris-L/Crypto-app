import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 60px;
    background-color:   #1E293B;
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 9px;
    }   
`
export const Brand = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const LogoImage = styled.img`
    width: 35px;
    height: 35px;
    object-fit: cover;
`
export const  BrandTittle = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 500;
`
export const NavList = styled.ul`  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  background-color: #0f172a;
  border-radius: 8px;
  padding: 8px 50px;
  color: #646c75;
  gap: 10px;
   margin: 12px 0;
  min-width: 550px;
 width: auto;
 transform: translateX(-50px);
`;
export const NavItems = styled(NavLink)`
  color: #646c75;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    color: white;
  }
`;
export const HearthIcon = styled(NavLink)`
    color: #EF4444;
    font-size: 25px;
    text-align: center;
    text-decoration: none;
    transform: translateY(3px);
    i {
    font-size: inherit;
  }

`   
export const UserBadge = styled(NavLink)`
  display: grid;
  position: relative; 
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid white;
  color: #1E293B;
  font-size: 15px;
  text-decoration:none;
    &::after {
    content: "";
    position: absolute;
    bottom: -6px;        
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent; 
    border-right: 5px solid transparent;
    border-top: 6px solid white;   
  }
`;