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
              <li>
                <input type="checkbox" />
                <div className="img" />
                <div className="text">
                  <span>배달이친구들 손바닥양면노트 2종</span>
                </div>
                <div>
                  <button>-</button>
                  <input type="number" value="1" />
                  <button>+</button>
                </div>
                <div>
                  <span>0원</span>
                  <button>x</button>
                </div>
              </li>
              <li>
                <input type="checkbox" />
                <div className="img" />
                <div className="text">
                  <span>배달이친구들 손바닥양면노트 2종</span>
                </div>
                <div>
                  <button>-</button>
                  <input type="number" value="1" />
                  <button>+</button>
                </div>
                <div>
                  <span>0원</span>
                  <button>x</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="paymentArea">
          <div className="paymentResult">
            <table className="amount">
              <tr>
                <th>총 상품 금액</th>
                <td>0원</td>
              </tr>
              <tr>
                <th>배송비</th>
                <td>+3000원</td>
              </tr>
            </table>
            <table className="total">
              <tr>
                <th>결제예상금액</th>
                <td>3000원</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
