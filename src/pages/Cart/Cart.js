import React from 'react';
import './Cart.scss';

const Cart = () => {
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
            <span>선택삭제</span>
          </div>
          <div className="product">
            <ul>
              <li>배달이친구들 손바닥양면노트 2종</li>
            </ul>
          </div>
        </div>
        <div className="paymentArea" />
      </div>
    </div>
  );
};

export default Cart;
