import React from 'react';
import List from './List';
import './BestList.scss';

const BestList = ({ best }) => {
  return (
    <div className="BestList">
      {best.map(product => {
        return (
          <List
            key={product.id}
            imgUrl={product.imgUrl}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default BestList;
