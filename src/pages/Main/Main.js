import React, { useEffect, useState } from 'react';
import BestList from './BestList';
import Slides from '../Slides/Slides';
import './Main.scss';

const Main = () => {
  const [best, setBest] = useState([]);

  //데이터 로딩
  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => setBest(result));
  }, []);

  return (
    <div className="main">
      <Slides />
      <div className="menuWrap">
        <div className="best">
          <h2>요즘 잘 나가요</h2>
          <BestList best={best} />
        </div>
        <div className="banner" />
        <div className="new">
          <h2>새로 나왔어요</h2>
          <BestList best={best} />
        </div>
      </div>
    </div>
  );
};

export default Main;
