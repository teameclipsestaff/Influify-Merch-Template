import React, {useState} from 'react';
import CartDrawer from './CartDrawer';
import styled from 'styled-components';

const HeaderTop = styled.div`
position: relative;
width: 100%;
height: 100px;
`;
const Wrapper = styled.div`
width: 80%;
margin: auto;
display: flex;
`;
const LogoContain = styled.div`
flex: 1;
`;
const MenuContain = styled.div`
flex: 1;
`;
const Logo = styled.h1`
font-size: 30px;
`;
const Nav = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
@media (max-width: 600px) {
  position: fixed;
  flex-direction: column;
  width: 10rem;
  height: 10rem;
  background-color: #000000;
  transition: 0.3s;
  top: ${({ menu }) => (menu ? '4.5rem' : '-100%')}
}
`;
const Link = styled.a`
text-decoration: none;
font-size: 20px;
color: #000000;
@media (max-width: 600px) {
  color: #ffffff;
  line-height: 2.0;
}
`;
const HamBurger = styled.div`
font-size: 30px;
padding-top: 1rem;
padding-left: 5rem;
cursor: pointer;
display: none;
@media (max-width: 600px) {
  display: block
}
`

const Header = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => setMenu(!menu)
  return(
    <HeaderTop>
        <Wrapper>
          <LogoContain>
            <a href="/">
            <Logo>AJ Merch</Logo>
            </a>
          </LogoContain>
          <MenuContain>
            <HamBurger>
            <i onClick={showMenu}className={menu ? 'fas fa-times' : 'fas fa-bars'}></i>
            </HamBurger>
            <Nav menu={menu}>
            <li><Link href="/">Shop All</Link></li>
            <li><Link href="/">Tees</Link></li>
            <li><Link href="/">Hoodies</Link></li>
            <li><Link href="/">Accessories</Link></li>
            </Nav>
          </MenuContain>
        </Wrapper>
        <CartDrawer />
      </HeaderTop>
  )
}
export default Header;