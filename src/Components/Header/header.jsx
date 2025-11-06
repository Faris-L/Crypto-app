
import Logo from "./../../assets/logokripto.png"
import {HeaderDiv,Brand,LogoImage,BrandTittle,NavList,HearthIcon,NavItems,UserBadge} from "../Header/header.styled.js"

const Header = () =>{
    return(
        <HeaderDiv>
            <Brand>
                <LogoImage src={Logo} alt="CryptoLogo"/>
                <BrandTittle>CRYPTO-APP</BrandTittle>
            </Brand>
            <NavList>
                <NavItems to="/">Home</NavItems>
                <NavItems to="/coins">Coins</NavItems>
                <NavItems to="/exchanges">Exchanges</NavItems>
                <NavItems to="/aboutus">About us</NavItems>
                <HearthIcon  to="/favourites"><i className='bx bx-heart'></i></HearthIcon>
            </NavList>
            <UserBadge to="/profile">
            <i class='bx  bx-user' ></i> 
            </UserBadge>
        </HeaderDiv>
    )
}
export default Header;