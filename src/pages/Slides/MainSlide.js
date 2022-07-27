import React from 'react';
import ImgList from './ImgList';
import './MainSlide.scss';

const MainSlide = ({ slideList, copy }) => {
  return (
    <div className="main-slide">
      <div className="list-wrap" style={{ left: copy }}>
        {slideList.map(slideImg => {
          return (
            <ImgList key={slideImg.id} id={slideImg.id} src={slideImg.src} />
          );
        })}
      </div>
    </div>
  );
};

export default MainSlide;
