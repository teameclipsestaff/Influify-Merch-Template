import React from 'react';
import styled from 'styled-components';

const FooterBottom = styled.div`
position: relative;
width: 100%;
height: 200px;
background-color: #000000;
`;
const Wrapper = styled.div`
width: 80%;
margin: auto;
display: flex;
`;
const CopyrightContainer = styled.div`
flex: 1;
`;
const CopyrightText = styled.p`
text-align: center;
font-size: 20px;
color: #ffffff;
`;
const MenuContainer = styled.div`
flex: 1;
`;
const Menu = styled.ul`
list-style: none;
text-align: center;
`;
const MenuLink = styled.a`
text-decoration: none;
color: #ffffff;
`;
const SocialContainer = styled.div`
flex: 1;
`;
const SocialLinks = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
`;
const SocialIcon = styled.a`
text-decoration: none;
color: #ffffff;
font-size: 30px;
`;
function Footer(){
  return(
    <FooterBottom>
      <Wrapper>
        <MenuContainer>
          <Menu>
            <li><MenuLink href="/">Terms</MenuLink></li>
            <li><MenuLink href="/">Privacy</MenuLink></li>
            <li><MenuLink href="/">Shipping & Returns</MenuLink></li>
          </Menu>
        </MenuContainer>
        <CopyrightContainer>
          <CopyrightText>
            &copy; 2021 AJ Merch<br></br>Powered by Influify
          </CopyrightText>
        </CopyrightContainer>
        <SocialContainer>
          <SocialLinks>
            <li><SocialIcon href="/"><i class="fab fa-instagram"></i></SocialIcon></li>
            <li><SocialIcon href="/"><i class="fab fa-twitter"></i></SocialIcon></li>
            <li><SocialIcon href="/"><i class="fab fa-youtube"></i></SocialIcon></li>
          </SocialLinks>
        </SocialContainer>
      </Wrapper>
    </FooterBottom>
  )
}
export default Footer;