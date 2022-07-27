import React from 'react';
import { Link } from 'react-router-dom';
import './Third.scss';

const Third = () => {
  return (
    <section className="item-detail-view-box-review">
      <div className="item-detail-view-review-title">
        <h3>
          상품후기<span>(0)</span>
        </h3>
        <Link to="/" className="review-right">
          후기 작성하기 {'>'}
        </Link>
      </div>
      <div className="item-detail-view-review">
        <div className="review-none">
          <h3>텅!</h3>
          <p className="ment">당신의 따듯한 후기를 기다립니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Third;
