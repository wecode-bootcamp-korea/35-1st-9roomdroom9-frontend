import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartItem = ({
  cartItem,
  onIncrement,
  onDecrement,
  checkedList,
  onChecked,
  onRemove,
  onInputChange,
}) => {
  const navigate = useNavigate();
  const productid = cartItem.product_id;

  return (
    <li>
      <input
        type="checkbox"
        onChange={e => onChecked(e.target.checked, cartItem)}
        checked={checkedList.includes(cartItem) ? true : false}
      />
      <div className="product-img">
        <img
          onClick={() => {
            navigate(`/Products/detail/${productid}`);
          }}
          src={cartItem.product_image[0]}
          alt={cartItem.product}
        />
      </div>
      <div className="product-name">
        <p
          onClick={() => {
            navigate(`/Products/detail/${productid}`);
          }}
        >
          {cartItem.product_name}
        </p>
      </div>
      <div className="product-quantity">
        <button onClick={() => onDecrement(cartItem)}>-</button>
        <input
          type="number"
          onChange={e => onInputChange(e, cartItem)}
          value={cartItem.quantity}
        />
        <button onClick={() => onIncrement(cartItem)}>+</button>
      </div>
      <div className="price-check">
        <span>
          {(cartItem.product_price * cartItem.quantity).toLocaleString('en') +
            '원'}
        </span>
        <button onClick={() => onRemove(cartItem)}>x</button>
      </div>
    </li>
  );
};

export default CartItem;
