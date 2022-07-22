import { fireEvent } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import ImgList from './ImgList';
import MainSlide from './MainSlide';
import './Slides.scss';

const Slides = () => {
  const [slideList, setSlideList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftValue, setLeftValue] = useState(0);
  const copy = leftValue + 'vw';

  useEffect(() => {
    fetch('/data/slide.json')
      .then(res => res.json())
      .then(result => setSlideList(result));
  }, []);

  // 이미지 슬라이드 기능 구현
  const prevSlide = () => {
    if (currentSlide < slideList.length) {
      setLeftValue(leftValue + 100);
      // setCurrentSlide(currentSlide - 1);
    }
  };

  // const nextSlide = () => {
  //   if (currentSlide < slideList.length - 1) {
  //     setLeftValue(leftValue - 100);
  //     // setCurrentSlide(currentSlide + 1);
  //   }
  // };

  const nextSlide = () => {
    currentSlide < slideList.length - 1
      ? setCurrentSlide(leftValue - 100)
      : setCurrentSlide(slideList.length + 1);
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
  }, [leftValue]);

  return (
    <div className="slides">
      <MainSlide slideList={slideList} copy={copy} />
      <div className="btn">
        <div className="prev" onClick={prevSlide} />
        <div className="next" onClick={nextSlide} />
      </div>
      {/* <div className="visual-dote">
        <span className="dot" />
      </div> */}
    </div>
  );
};

export default Slides;
