import React, { useEffect, useState } from 'react';
import NewList from './components/NewList';
import BestList from './components/BestList';
import GreenList from './components/GreenList';
import Slides from '../Slides/Slides';
import './Main.scss';

const Main = () => {
  const [best, setBest] = useState([]);

  useEffect(() => {
    fetch('http://10.58.0.44:8000/products/main')
      .then(res => res.json())
      .then(result => setBest(result));
  }, []);

  const { new_products, best_products, green_products } = best;

  const isData = best.length !== 0;
  if (!isData) return <>로딩중입니다....</>;

  return (
    <div className="main">
      <Slides />
      <div className="menu-wrap">
        <div className="best">
          <h2>요즘 잘 나가요</h2>
          <div className="best-wrap">
            <BestList data={best_products} />
          </div>
        </div>
        <div className="banner" />
        <div className="new">
          <h2>새로 나왔어요</h2>
          <div className="new-wrap">
            <NewList data={new_products} />
          </div>
        </div>
        <div className="green">
          <h2>지금은 할인중</h2>
          <div className="green-wrap">
            <GreenList data={green_products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
