import React from 'react';

const CartItem = ({
  cartItem,
  onIncrement,
  onDecrement,
  checkedList,
  onChecked,
  onRemove,
  onInputChange,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={e => onChecked(e.target.checked, cartItem)}
        checked={checkedList.includes(cartItem) ? true : false}
      />
      <div className="product-img">
        <img src={cartItem.product_image[0]} alt={cartItem.product} />
      </div>
      <div className="product-name">
        <p>{cartItem.product_name}</p>
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
