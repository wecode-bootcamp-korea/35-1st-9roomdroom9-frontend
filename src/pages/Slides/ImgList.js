import React from 'react';
import './ImgList.scss';

const ImgList = ({ src }) => {
  return (
    <div className="sliderContainer">
      <img src={src} alt="슬라이드이미지" />
    </div>
  );
};

export default ImgList;
