import React from 'react';
import './BestList.scss';

const BestList = best_products => {
  const min = 1;
  // console.log(best_products);
  const { data } = best_products;

  return (
    <ul className="best-list">
      {data.map(bestData => {
        return (
          <li key={bestData.id} className="best-list-wrap">
            <div className="best-list-img-box">
              <img src={bestData.images[0].url} alt="임시" />
            </div>
            <div className="best-list-name-box">{bestData.name}</div>
            <div className="best-list-price-box">
              {(bestData.price * min).toLocaleString('ko-KR')}원
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BestList;
