import React, {Component} from 'react';
import styled from 'styled-components';

const CartButton = styled.div`
position: fixed;
width: 50px;
height: 50px;
top: 0;
right: 2rem;
padding: 16px 1rem;
background-color: #000000;
border-radius: 16px;
border-top-left-radius: 0;
border-top-right-radius: 0;
color: #ffffff;
font-size: 1rem;
`;
const CartFixed = styled.div`
position: fixed;
height: 100%;
width: 50%;
right: -100%;
background-color: #000000;
top: 0;
`;
const Heading = styled.h1`
color: #ffffff;
`;

class CartDrawer extends Component{
  render(){
    return(
      <>
      <CartButton>
        <h5>Cart (0)</h5>
      </CartButton>
      <CartFixed>
        <Heading>No Items In Your Cart</Heading>
      </CartFixed>
      </>
    )
  }
}
export default CartDrawer;