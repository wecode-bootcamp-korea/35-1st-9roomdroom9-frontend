import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import './ItemDetail.scss';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
// import { BASE_URL } from '../../config';

const ItemDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [itemData, setItemInfo] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  const params = useParams();
  const navigate = useNavigate();

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  useEffect(() => {
    fetch(`${PROXY}/products/detail/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setItemInfo(data.result);
      });
  }, [PROXY, params.id]);

  const isData = itemData.length !== 0;

  const { name, price, images, alt, options, is_best, is_green } = itemData;

  const goToCart = () => {
    const token = localStorage.getItem('token');
    const product_option_id = itemData.options[0].product_option_id;

    if (!token) {
      alert('로그인이 필요해요!');
      navigate('/Login');
      return;
    }

    fetch(`${PROXY}/carts`, {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify({
        quantity: quantity,
        product_option: product_option_id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          window.confirm(
            '장바구니에 담겼습니다. 장바구니 페이지로 이동할까요?'
          ) && navigate('/Cart');
        } else {
          alert('예외의 경우 테스트 알람');
        }
      });
  };

  // 상수데이터 화면 보기용으로 두겠습니다.
  // useEffect(() => {
  //   fetch('/data/itemDetailData.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItemInfo(data[0]);
  //     });
  // }, []);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const clickHandler = id => {
    setCurrentId(id);
  };

  const priceMin = 1;

  const MAPPING_OBJ = {
    1: <First data={itemData} />,
    2: <Second />,
    3: <Third />,
  };

  return !isData ? (
    <Skeleton height="600px" className="item-detail" />
  ) : (
    <div className="item-detail">
      <div className="item-detail-view">
        <div className="item-detail-view_header">
          <div className="item-detail-info">
            <div className="badge">
              {is_best && <span className="badge-best">BEST</span>}
              {is_green && <span className="badge-green">GREEN</span>}
            </div>
            <h3 className="name">{name}</h3>
            <p className="price">
              {(priceMin * price).toLocaleString('ko-KR')}원
            </p>
          </div>
          <div className="item-detail-swiper">
            <img src={images[0].url} alt={alt} />
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
                    <h4>제작자 : {options[0].name}</h4>
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
                        <span>
                          {(quantity * price).toLocaleString('ko-KR')}원
                        </span>
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
                  <button onClick={goToCart} className="btn-cart">
                    장바구니
                  </button>
                  <button className="btn-base">바로 구매하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-detail-veiw-content">
          <div className="item-detail-tabs">
            <ul>
              {CATEGORY_ARR.map((category, idx) => {
                return (
                  <li
                    key={category + idx}
                    className={category.className}
                    onClick={() => clickHandler(idx + 1)}
                  >
                    {category.category}
                  </li>
                );
              })}
            </ul>
            {MAPPING_OBJ[currentId]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

const CATEGORY_ARR = [
  {
    id: 1,
    category: '상품정보',
    className: 'productInfo',
  },
  {
    id: 2,
    category: '기본정보',
    className: 'productInfoBasic',
  },
  {
    id: 3,
    category: '상품후기',
    className: 'productReview',
  },
];
