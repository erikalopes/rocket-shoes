import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';

import { MdShoppingBasket } from 'react-icons/md'
import logo from '../../assets/image/logo.svg';

function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="rocketshoes" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingBasket size={26} color="#fff" />
            </Cart>
        </Container>
    )
}

export default Header;