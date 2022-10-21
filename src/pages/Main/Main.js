import React, { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';
import Slides from '../Slides/Slides';
import Skeleton from 'react-loading-skeleton';
// import { BASE_URL } from '../../config';
import './Main.scss';

const Main = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('/data/main.json')
  //     .then(res => res.json())
  //     .then(result => setProducts(result));
  // }, []);
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  useEffect(() => {
    fetch(`${PROXY}/products/main`)
      .then(res => res.json())
      .then(result => setProducts(result));
  }, [PROXY]);

  const { best_products, new_products, green_products } = products;

  const isData = products.length !== 0;

  return !isData ? (
    <div className="main">
      <Slides />
      <div className="menu-wrap">
        <div className="best">
          <h2>❤️ 요즘 잘 나가요 ❤️</h2>
          <div className="best-wrap">
            <ul className="pro-list">
              {Array.from({ length: 8 }, (v, i) => (
                <li key={i} className="pro-list-wrap">
                  <div className="pro-list-img-box">
                    <Skeleton width="270px" height="270px" />
                  </div>
                  <div className="badge">
                    <Skeleton
                      className="badge-best"
                      width="80px"
                      height="20px"
                    />
                    <Skeleton
                      className="badge-green"
                      width="80px"
                      height="20px"
                    />
                  </div>
                  <Skeleton
                    className="pro-list-name-box"
                    width="120px"
                    height="20px"
                  />
                  <Skeleton
                    className="pro-list-price-box"
                    width="140px"
                    height="20px"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="banner">
          <img src="/images/mainPage/banner-bg01.png" alt="배너1" />
        </div>
        <div className="new">
          <h2>🐥 새로 나왔어요 🐥</h2>
          <div className="new-wrap">
            <ul className="pro-list">
              {Array.from({ length: 8 }, (v, i) => (
                <li key={i} className="pro-list-wrap">
                  <div className="pro-list-img-box">
                    <Skeleton width="270px" height="270px" />
                  </div>
                  <div className="badge">
                    <Skeleton
                      className="badge-best"
                      width="80px"
                      height="20px"
                    />
                    <Skeleton
                      className="badge-green"
                      width="80px"
                      height="20px"
                    />
                  </div>
                  <Skeleton
                    className="pro-list-name-box"
                    width="120px"
                    height="20px"
                  />
                  <Skeleton
                    className="pro-list-price-box"
                    width="140px"
                    height="20px"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="banner">
          <img src="/images/mainPage/banner-bg02.png" alt="배너2" />
        </div>
        <div className="green">
          <h2>🌱 친환경 제품이에요 🌱</h2>
          <div className="green-wrap">
            <ul className="pro-list">
              {Array.from({ length: 8 }, (v, i) => (
                <li key={i} className="pro-list-wrap">
                  <div className="pro-list-img-box">
                    <Skeleton width="270px" height="270px" />
                  </div>
                  <div className="badge">
                    <Skeleton
                      className="badge-best"
                      width="80px"
                      height="20px"
                    />
                    <Skeleton
                      className="badge-green"
                      width="80px"
                      height="20px"
                    />
                  </div>
                  <Skeleton
                    className="pro-list-name-box"
                    width="120px"
                    height="20px"
                  />
                  <Skeleton
                    className="pro-list-price-box"
                    width="140px"
                    height="20px"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
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
          <h2>🌱 친환경 제품이에요 🌱</h2>
          <div className="green-wrap">
            <ProductsList products={green_products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
