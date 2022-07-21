import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const onChangeProps = (id, key, value) => {
    setCartList(prevState => {
      return prevState.map(obj => {
        if (obj.id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/cartList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <div className="cart">
      <div className="title">
        <span>장바구니</span>
      </div>
      <div className="cartWrap">
        <div className="cartContent">
          <div className="cartTop">
            <label>
              <input type="checkbox" />
              전체선택
            </label>
            <button>선택삭제</button>
          </div>
          <div className="product">
            <ul>
              {cartList.map((item, i) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    onChangeProps={onChangeProps}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="paymentArea">
          <div className="paymentResult">
            <table className="amount">
              <tbody>
                <tr>
                  <th>총 상품 금액</th>
                  <td>0원</td>
                </tr>
                <tr>
                  <th>배송비</th>
                  <td>+3000원</td>
                </tr>
              </tbody>
            </table>
            <table className="total">
              <tbody>
                <tr>
                  <th>결제예상금액</th>
                  <td>3000원</td>
                </tr>
              </tbody>
            </table>
            <button className="order">0원 주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
