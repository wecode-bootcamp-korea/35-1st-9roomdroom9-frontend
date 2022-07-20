import React from 'react';
import ImgList from './ImgList';
import './MainSlide.scss';

const MainSlide = ({ slideList }) => {
  return (
    <div className="MainSlide">
      {slideList.map(slideImg => {
        return (
          <ImgList key={slideImg.id} id={slideImg.id} src={slideImg.src} />
        );
      })}
    </div>
  );
};

export default MainSlide;
