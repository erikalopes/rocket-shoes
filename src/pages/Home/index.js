import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/12/D22-3195-012/D22-3195-012_zoom1.jpg?ts=1574458867&ims=544x"
          alt="Tênis Masculino"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/12/D22-3195-012/D22-3195-012_zoom1.jpg?ts=1574458867&ims=544x"
          alt="Tênis Masculino"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/12/D22-3195-012/D22-3195-012_zoom1.jpg?ts=1574458867&ims=544x"
          alt="Tênis Masculino"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/12/D22-3195-012/D22-3195-012_zoom1.jpg?ts=1574458867&ims=544x"
          alt="Tênis Masculino"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/12/D22-3195-012/D22-3195-012_zoom1.jpg?ts=1574458867&ims=544x"
          alt="Tênis Masculino"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
