import React, { useState, useEffect, useCallback } from 'react';
import CartItem from './CartItem';
// import { BASE_URL } from '../../config';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkedList, setCheckedLists] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const priceTotal = sumPrice + deliveryFee;

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  useEffect(() => {
    fetch(`${PROXY}/carts`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data.result);
        setCheckedLists(data.result);
      });
  }, [PROXY]);

  useEffect(() => {
    setSumPrice(
      Math.floor(
        checkedList.reduce(
          (acc, item) => acc + item.product_price * item.quantity,
          0
        )
      )
    );
    setDeliveryFee(!checkedList.length ? 0 : sumPrice < 30000 ? 3000 : 0);
  }, [cartList, checkedList, sumPrice]);

  const handleIncrement = item => {
    const copyList = [...cartList];
    const index = copyList.indexOf(item);
    const quantity = copyList[index].quantity + 1;
    copyList[index].quantity = quantity > 999 ? 999 : quantity;
    setCartList(copyList);
  };

  const handleDecrement = item => {
    const copyList = [...cartList];
    const index = copyList.indexOf(item);
    const quantity = copyList[index].quantity - 1;
    copyList[index].quantity = quantity < 1 ? 1 : quantity;
    setCartList(copyList);
  };

  const handleChange = (e, item) => {
    const copyList = [...cartList];
    const index = copyList.indexOf(item);
    copyList[index].quantity =
      e.target.value < 1 ? 1 : e.target.value > 999 ? 999 : e.target.value;
    setCartList(copyList);
  };

  const onCheckedAll = useCallback(
    checked => {
      if (checked) {
        const checkedListArray = [];
        cartList.forEach(list => checkedListArray.push(list));
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [cartList]
  );

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter(el => el !== list));
      }
    },
    [checkedList]
  );

  const onSelectRemove = () => {
    const copyList = [...cartList];

    const cartDelete = copyList.filter(a => checkedList.includes(a));
    const cartMap = cartDelete.map(item => item.cart_id);
    const deleteUrl = cartMap
      .map(e => {
        return ['cart_id', e];
      })
      .map(e => e.join('='))
      .join('&');

    fetch(`${PROXY}/carts?${deleteUrl}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(res => {
        if (res) {
          alert('선택 상품을 삭제 완료 하였습니다.');
          setCartList(copyList.filter(a => !checkedList.includes(a)));
          setCheckedLists([]);
        } else alert('선택 상품 삭제를 실패 하였습니다');
      })
      .catch(() => {
        alert('인터넷 연결을 확인하세요.');
      });
  };

  const onRemove = item => {
    const copyList = [...cartList];

    const cartDelete = copyList.filter(a => a === item);
    const deleteItem = cartDelete[0].cart_id;

    fetch(`${PROXY}/carts?cart_id=${deleteItem}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(res => {
        if (res) {
          alert('선택 상품을 삭제 완료 하였습니다.');
          setCartList(copyList.filter(a => a !== item));
          setCheckedLists(checkedList.filter(a => a !== item));
        } else {
          alert('선택 상품 삭제를 실패 하였습니다');
        }
      })
      .catch(() => {
        alert('인터넷 연결을 확인하세요.');
      });
  };

  return (
    <div className="cart">
      <div className="title">
        <span>장바구니</span>
      </div>
      <div className="cart-wrap">
        {!cartList.length ? (
          <div className="empty-product">
            <p className="empty-text">앗!</p>
            <p className="empty-text-sub">장바구니가 텅~</p>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-top">
              <label>
                <input
                  type="checkbox"
                  onChange={e => onCheckedAll(e.target.checked)}
                  checked={
                    checkedList.length === 0
                      ? false
                      : checkedList.length === cartList.length
                      ? true
                      : false
                  }
                />
                전체선택
              </label>
              <button onClick={() => onSelectRemove()}>선택삭제</button>
            </div>

            <div className="product-list">
              <ul>
                {cartList.map((item, i) => {
                  return (
                    <CartItem
                      key={item.product_id}
                      cartItem={item}
                      checkedList={checkedList}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                      onChecked={onCheckedElement}
                      onRemove={onRemove}
                      onInputChange={handleChange}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        )}
        <div className="payment-area">
          <div className="payment-result">
            <table className="amount">
              <tbody>
                <tr>
                  <th>총 상품 금액</th>
                  <td>{sumPrice.toLocaleString('en')}원</td>
                </tr>
                <tr>
                  <th>배송비</th>
                  <td>{deliveryFee}원</td>
                </tr>
              </tbody>
            </table>
            <table className="total">
              <tbody>
                <tr>
                  <th>결제예상금액</th>
                  <td>{priceTotal.toLocaleString('en')}원</td>
                </tr>
              </tbody>
            </table>
            <button className={priceTotal ? 'order-ok' : 'order-fail'}>
              {priceTotal.toLocaleString('en')}원 주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
