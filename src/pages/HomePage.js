import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
position: relative;
height: 90vh;
`;
const Text = styled.div`
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: #000000;
`;
const ProductGrid = styled.div`
position: relative;
display: grid;
grid-column-gap: 50px;
grid-template-columns: auto auto auto;
padding: 10px;
`;
const ProductGridItem = styled.div`
position: relative;
padding: 20px;
text-align: center;
`;

function HomePage(){
  return(
    <>
    <HeroSection>
      <Text>
        <h1>Merchandise Sale!</h1>
        <p>Up to 50% off!</p>
      </Text>
    </HeroSection>
    <ProductGrid>
      <ProductGridItem>
        <h1>Title</h1>
        <p>$1.00</p>
      </ProductGridItem>
      <ProductGridItem>
        <h1>Title</h1>
        <p>$1.00</p>
      </ProductGridItem>
      <ProductGridItem>
        <h1>Title</h1>
        <p>$1.00</p>
      </ProductGridItem>
      <ProductGridItem>
        <h1>Title</h1>
        <p>$1.00</p>
      </ProductGridItem>
      <ProductGridItem>
        <h1>Title</h1>
        <p>$1.00</p>
      </ProductGridItem>
    </ProductGrid>
    </>
  )
}
export default HomePage;