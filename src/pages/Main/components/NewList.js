import React from 'react';
import './NewList.scss';

const NewList = new_products => {
  const min = 1;
  const { data } = new_products;

  return (
    <ul className="new-list">
      {data.map(newData => {
        return (
          <li key={newData.id} className="new-list-wrap">
            <div className="new-list-img-box">
              <img src={newData.images[0].url} alt="임시" />
            </div>
            <div className="new-list-name-box">{newData.name}</div>
            <div className="new-list-price-box">
              {(newData.price * min).toLocaleString('ko-KR')}원
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NewList;
