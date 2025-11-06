import { FooterWrap, PillNav, PillLink, Credits, Copy } from "./footer.styled";

export default function Footer() {
  return (
    <FooterWrap>
      <PillNav>
        <PillLink to="/">Website</PillLink>
        <PillLink to="/users">Users</PillLink>
        <PillLink to="/coins">Coins</PillLink>
        <PillLink to="/exchanges">Exchanges</PillLink>
      </PillNav>

      <Credits>
        Crypto app made by: Faris Lakota,Hamza Fijuljanin,Erna Bisevac;
      </Credits>

      <Copy>© 2022 Crypto App</Copy>
    </FooterWrap>
  );
}
