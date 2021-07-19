import React, {useState} from 'react';
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
z-index: 999;
cursor: pointer;
`;
const CartFixed = styled.div`
position: fixed;
height: 100%;
width: 50%;
background-color: #000000;
top: 0;
transition: 0.5s;
right: ${({ cart }) => (cart ? '0' : '-100%')}
`;
const Heading = styled.h1`
color: #ffffff;
padding-top: 10rem;
text-align: center;
`;

const CartDrawer = () =>{
  const [cart, setCart] = useState(false)

  const showCart = () => setCart(!cart)
  return(
    <>
    <CartButton onClick={showCart}>
      <h5><i className={cart ? 'fas fa-times' : 'fas fa-shopping-cart'}></i> (0)</h5>
    </CartButton>
    <CartFixed cart={cart}>
      <Heading>
        No Items In Your Cart<br></br><i className="fas fa-shopping-cart"></i>
      </Heading>
    </CartFixed>
    </>
  )
}
export default CartDrawer;