import React from 'react';
import './GreenList.scss';

const GreenList = green_products => {
  const min = 1;
  const { data } = green_products;

  return (
    <ul className="green-list">
      {data.map(greenData => {
        return (
          <li key={greenData.id} className="green-list-wrap">
            <div className="green-list-img-box">
              <img src={greenData.images[0].url} alt="임시" />
            </div>
            <div className="green-list-name-box">{greenData.name}</div>
            <div className="green-list-price-box">
              {(greenData.price * min).toLocaleString('ko-KR')}원
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default GreenList;
