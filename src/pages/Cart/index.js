import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={"https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/12/D22-3836-012/D22-3836-012_zoom1.jpg?ts=1587151383&ims=326x"} alt="product" />
                        </td>
                        <td>
                            <strong>tênis legal</strong>
                            <span>R$ 129,0</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>
                                <input type="number" readOnly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#7159c1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 258,12 </strong>
                        </td>
                        <td>
                            <button>
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL: </span>
                    <strong>R$ 129,02</strong>
                </Total>
            </footer>
        </Container>
    )
}

export default Cart;