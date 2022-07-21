import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.scss';

const ItemDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [itemData, setItemInfo] = useState([]);
  const { name, title, price, img_urls, alt } = itemData;

  useEffect(() => {
    fetch('/data/itemDetailData.json')
      .then(res => res.json())
      .then(data => {
        setItemInfo(data[0]);
      });
  }, []);

  const isData = itemData.length !== 0;
  if (!isData) return <>데이터 불러오는중...로딩중입니다.</>;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-view">
        <div className="item-detail-view_header">
          <div className="item-detail-info">
            <h3 className="name">{title}</h3>
            <p className="price">{price.toLocaleString('ko-KR')}원</p>
          </div>
          <div className="item-detail-swiper">
            <img src={img_urls} alt={alt} />
          </div>
          <div className="item-detail-order">
            <div className="shipping-guide">
              <div className="shipping-info">배송정보</div>
              <div className="shipping-price">
                3,000원 (30,000원 이상 구매 시 무료)
                <br />
                오후 1시 당일배송마감
              </div>
            </div>
            <div className="item-buy">
              <div className="item-buy-content">
                <div className="item-buy-list">
                  <div className="item-buy-list-box">
                    <h4>{name}</h4>
                    <div className="item-buy-options">
                      <div className="quantity">
                        <input type="number" value={quantity} readOnly />
                        <button
                          className="btn-minus"
                          onClick={decreaseQuantity}
                        >
                          -
                        </button>
                        <button className="btn-plus" onClick={increaseQuantity}>
                          +
                        </button>
                      </div>
                      <p className="price">
                        <span>3,500원</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-total-price">
                  <div className="total-price">총 금액</div>
                  <div className="single-price">
                    <span> {(quantity * price).toLocaleString('ko-KR')}원</span>
                  </div>
                </div>
                <div className="item-btn-group">
                  <button className="btn-cart">장바구니</button>
                  <button className="btn-base">바로 구매하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-detail-veiw-content">
          <div className="item-detail-tabs">
            <ul>
              <li className="active">
                <Link to="/">상품정보</Link>
              </li>
              <li>
                <Link to="/">기본정보</Link>
              </li>
              <li>
                <Link to="/">상품후기</Link>
              </li>
            </ul>
          </div>
          <section className="item-detail-view-box">
            <h3 className="blind">상품정보</h3>
            <div className="item-detail-info-img">
              <img src="images/itemDetail/itemDetail.jpeg" alt="상품설명" />
            </div>
            <div className="item-detail-info">
              <h4>상품상세정보</h4>
              <table>
                <tbody>
                  <tr>
                    <th>제품명</th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>
                      법에 의한 인증 · 허가 등을 받았음을 확인할 수 있는 경우
                      그에 대한 사항
                    </th>
                    <td>해당없음</td>
                  </tr>
                  <tr>
                    <th>크기</th>
                    <td>70x95mm</td>
                  </tr>
                  <tr>
                    <th>제조사 및 수입자명</th>
                    <td>위코드문방구</td>
                  </tr>
                  <tr>
                    <th>제조국</th>
                    <td>한국</td>
                  </tr>
                  <tr>
                    <th>사용연령</th>
                    <td>8세 이상</td>
                  </tr>
                  <tr>
                    <th>상품문의</th>
                    <td>1:1 문의게시판으로 문의해주세요</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
