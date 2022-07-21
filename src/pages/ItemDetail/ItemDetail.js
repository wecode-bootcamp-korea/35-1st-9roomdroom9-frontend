import React from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.scss';

const ItemDetail = () => {
  return (
    <div className="item-detail">
      <div className="item-detail-view">
        <div className="item-detail-view_header">
          <div className="item-detail-info">
            <h3 className="name">위달이친구들 손바닥양면노트2종</h3>
            <p className="price">2,000원</p>
          </div>
          <div className="item-detail-swiper">
            <img src="images/itemDetail/itemslide.gif" alt="상품슬라이드" />
          </div>
          <div className="item-detail-order">
            <div className="shipping-guide">
              <div className="shipping-info">배송정보</div>
              <div className="shipping-price">
                3,000원 (30,000원 이상 구매 시 무료)
              </div>
              <br />
              오후 1시 당일배송마감
            </div>
            <div className="item-buy">
              <div className="item-buy-content">
                <div className="item-buy-list">
                  <div className="item-buy-list-box">
                    <h4>감자그만괴롭혀</h4>
                    <div className="item-buy-options">
                      <div className="quantity">
                        <input type="number" value={1} />
                        <button className="btn-minus">-</button>
                        <button className="btn-plus">+</button>
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
                    <span>3,500원</span>
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
                    <td>위코드친구들 손바닥양면노트</td>
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

const ITEM_DETAIL_DATA = [
  {
    id: 1,
    name: '상품1번째',
    price: 3000.0,
    count: 1,
    thumbnail_image:
      'https://images.unsplash.com/photo-1644307358784-c6c589c9dcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80',
  },
  {
    id: 2,
    name: '상품2번째',
    price: 4000.0,
    count: 4,
    thumbnail_image:
      'https://images.unsplash.com/photo-1646423225693-87b585201127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 3,
    name: '상품3번째',
    price: 1000.0,
    count: 1,
    thumbnail_image:
      'https://images.unsplash.com/photo-1557686652-6731ba12410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 4,
    name: '상품4번째',
    price: 4000.0,
    count: 2,
    thumbnail_image:
      'https://images.unsplash.com/photo-1557686652-6731ba12410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 5,
    name: '상품5번째',
    price: 4000.0,
    count: 6,
    thumbnail_image:
      'https://images.unsplash.com/photo-1557686652-6731ba12410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 6,
    name: '상품6번째',
    price: 4000.0,
    count: 1,
    thumbnail_image:
      'https://images.unsplash.com/photo-1557686652-6731ba12410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 7,
    name: '상품7번째',
    price: 1000.0,
    count: 3,
    thumbnail_image:
      'https://images.unsplash.com/photo-1557686652-6731ba12410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
];
