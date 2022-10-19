import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsList.scss';

const ProductsList = ({ products }) => {
  const min = 1;

  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/products/detail/${id}`);
  };

  return (
    <ul className="pro-list">
      {products.map(porData => {
        return (
          <li key={porData.id} className="pro-list-wrap">
            <div
              className="pro-list-img-box"
              onClick={() => {
                goToDetail(porData.id);
              }}
            >
              <img src={porData.images[0].url} alt="이미지" />
            </div>
            <div className="badge">
              {porData.is_best && <span className="badge-best">BEST</span>}
              {porData.is_green && <span className="badge-green">GREEN</span>}
            </div>
            <div className="pro-list-name-box">{porData.name}</div>
            <div className="pro-list-price-box">
              {(porData.price * min).toLocaleString('ko-KR')}원
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
