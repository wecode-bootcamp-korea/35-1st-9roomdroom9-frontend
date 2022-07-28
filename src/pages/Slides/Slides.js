import React, { useEffect, useState } from 'react';
import MainSlide from './MainSlide';
import './Slides.scss';

const Slides = () => {
  const [slideList, setSlideList] = useState([]);
  const [leftValue, setLeftValue] = useState(0);
  const leftSlide = leftValue + 'vw';

  useEffect(() => {
    fetch('/data/slide.json')
      .then(res => res.json())
      .then(result => setSlideList(result));
  }, []);

  const prevSlide = () => {
    leftValue === 0 ? setLeftValue(-200) : setLeftValue(leftValue + 100);
  };

  const nextSlide = () => {
    leftValue === -200 ? setLeftValue(0) : setLeftValue(leftValue - 100);
  };

  useEffect(() => {
    const cycleImge = () => {
      leftValue === (slideList.length - 1) * -100
        ? setLeftValue(0)
        : setLeftValue(leftValue - 100);
    };

    const autoSlide = setInterval(cycleImge, 3000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [leftValue, slideList.length]);

  return (
    <div className="slides">
      <MainSlide slideList={slideList} leftSlide={leftSlide} />
      <div className="btn">
        <div className="prev" onClick={prevSlide} />
        <div className="next" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slides;
