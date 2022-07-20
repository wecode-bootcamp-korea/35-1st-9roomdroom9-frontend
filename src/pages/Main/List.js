import React from 'react';
import './List.scss';

const List = ({ imgUrl, name, price }) => {
  return (
    <div className="listContainer">
      <img src={imgUrl} alt="이미지" />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default List;
