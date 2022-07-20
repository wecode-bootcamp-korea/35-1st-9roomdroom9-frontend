import React, { useEffect, useState } from 'react';
import MainSlide from './MainSlide';
import './Slides.scss';

const Slides = () => {
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    fetch('/data/slide.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => setSlideList(result));
  }, []);
  return (
    <div className="slides">
      <MainSlide slideList={slideList} />
      <div className="btn">
        <div className="prev" />
        <div className="next" />
      </div>
      <div className="visualDote">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    </div>
  );
};

export default Slides;
