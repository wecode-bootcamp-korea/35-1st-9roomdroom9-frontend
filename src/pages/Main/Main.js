import React, { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';
import Slides from '../Slides/Slides';
import { BASE_URL } from '../../config';
import './Main.scss';

const Main = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('/data/main.json')
  //     .then(res => res.json())
  //     .then(result => setProducts(result));
  // }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/products/main`)
      .then(res => res.json())
      .then(result => setProducts(result));
  }, []);

  const { best_products, new_products, green_products } = products;

  const isData = products.length !== 0;

  return !isData ? (
    <div>로딩중입니다.</div>
  ) : (
    <div className="main">
      <Slides />
      <div className="menu-wrap">
        <div className="best">
          <h2>❤️ 요즘 잘 나가요 ❤️</h2>
          <div className="best-wrap">
            <ProductsList products={best_products} />
          </div>
        </div>
        <div className="banner">
          <img src="/images/mainPage/banner-bg01.png" alt="배너1" />
        </div>
        <div className="new">
          <h2>🐥 새로 나왔어요 🐥</h2>
          <div className="new-wrap">
            <ProductsList products={new_products} />
          </div>
        </div>
        <div className="banner">
          <img src="/images/mainPage/banner-bg02.png" alt="배너2" />
        </div>
        <div className="green">
          <h2>🌱 지금은 할인중 🌱</h2>
          <div className="green-wrap">
            <ProductsList products={green_products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
