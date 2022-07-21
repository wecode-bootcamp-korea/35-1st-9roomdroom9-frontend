import React, { useEffect, useState } from 'react';

const CartItem = ({ item, onChangeProps }) => {
  const [isBtnValid, setIsBtnValid] = useState(true);

  const amountInputHandler = event => {
    0 < event.target.value
      ? onChangeProps(item.id, 'quantity', event.target.value)
      : onChangeProps(item.id, 'quantity', 1);
  };

  const amountIncreaseHandler = event => {
    event.preventDefault();
    onChangeProps(item.id, 'quantity', item.quantity + 1);
  };

  const amountDecreaseHandler = event => {
    event.preventDefault();
    onChangeProps(item.id, 'quantity', item.quantity - 1);
  };

  useEffect(() => {
    setIsBtnValid(item.quantity > 1);
  }, [item.quantity]);

  return (
    <li key={item.id}>
      <input type="checkbox" />
      <div className="img" />
      <div className="text">
        <p>{item.product}</p>
        <p>{item.option}</p>
      </div>
      <div className="quantity">
        <button onClick={amountDecreaseHandler} disabled={!isBtnValid}>
          -
        </button>
        <input
          type="number"
          onChange={amountInputHandler}
          value={item.quantity}
        />
        <button onClick={amountIncreaseHandler}>+</button>
      </div>
      <div className="price-check">
        <span>{item.price * item.quantity + '원'}</span>
        <button>x</button>
      </div>
    </li>
  );
};

export default CartItem;
