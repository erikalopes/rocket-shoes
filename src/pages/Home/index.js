import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
  return (
      <ProductList>
          <li>
              <img src={"https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/12/D22-3836-012/D22-3836-012_zoom1.jpg?ts=1587151383&ims=326x"} alt="product" />
              <strong>tênis muito legal</strong>
              <span>129,90</span>

              <button type="button">
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
              </button>
          </li>
          <li>
              <img src={"https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/12/D22-3836-012/D22-3836-012_zoom1.jpg?ts=1587151383&ims=326x"} alt="product" />
              <strong>tênis muito legal</strong>
              <span>129,90</span>

              <button type="button">
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
              </button>
          </li>
          <li>
              <img src={"https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/12/D22-3836-012/D22-3836-012_zoom1.jpg?ts=1587151383&ims=326x"} alt="product" />
              <strong>tênis muito legal</strong>
              <span>129,90</span>

              <button type="button">
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
              </button>
          </li>
          <li>
              <img src={"https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/12/D22-3836-012/D22-3836-012_zoom1.jpg?ts=1587151383&ims=326x"} alt="product" />
              <strong>tênis muito legal</strong>
              <span>129,90</span>

              <button type="button">
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
              </button>
          </li>
          <li>
              <img src={"https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/12/D22-3836-012/D22-3836-012_zoom1.jpg?ts=1587151383&ims=326x"} alt="product" />
              <strong>tênis muito legal</strong>
              <span>129,90</span>

              <button type="button">
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
              </button>
          </li>
          <li>
              <img src={"https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/12/D22-3836-012/D22-3836-012_zoom1.jpg?ts=1587151383&ims=326x"} alt="product" />
              <strong>tênis muito legal</strong>
              <span>129,90</span>

              <button type="button">
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
              </button>
          </li>
      </ProductList>
  )
}

export default Home;