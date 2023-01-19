import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
// import { BASE_URL } from '../../config';
import './ItemList.scss';

const ItemList = () => {
  const [list, setList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const { category_data, products_data } = list;

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const getData = useCallback(() => {
    fetch(
      `${PROXY}/products/${params.id}?offset=${(pageNum - 1) * 10}&limit=10`
    )
      .then(res => res.json())
      .then(data => {
        setList(current => {
          let newCondition = { ...current };
          newCondition.category_data = data.category_data;
          newCondition.products_data = newCondition.products_data
            ? newCondition.products_data.concat(data.products_data)
            : data.products_data;
          return newCondition;
        });
      });
  }, [PROXY, pageNum, params.id]);

  useEffect(() => {
    pageNum !== 1 && getData();
  }, [pageNum, getData]);

  useEffect(() => {
    fetch(`${PROXY}/products/${params.id}?offset=0&limit=10`)
      .then(res => res.json())
      .then(data => {
        setList(data);
      });
    setPageNum(1);
  }, [PROXY, params.id]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPageNum(prev => prev + 1);
    }
  };

  const sort = sortPrice => {
    fetch(`${PROXY}/products/${params.id}?sorting=${sortPrice}`)
      .then(res => res.json())
      .then(data => {
        setList(data);
      });
  };

  const isData = list.length !== 0;

  const goToDetail = id => {
    navigate(`/products/detail/${id}`);
  };

  const priceMin = 1;

  return !isData ? (
    <div className="item-list">
      <div className="item-list-header">
        <h2 className="item-list-title">
          전체
          <span>총 40 개 좀 안됨 ㅋ</span>
        </h2>
        <p className="item-list-message" width="200px">
          여기에 다 있어요!
        </p>
      </div>
      <div className="item-list-message-wrap">
        <div className="item-list-recommend-text">
          <button className="button-least">최신순 |</button>
          <button className="button-recommend">높은 가격순 |</button>
          <button className="button-recommend">낮은 가격순</button>
        </div>
      </div>
      <div className="item-list-img-list">
        {Array.from({ length: 10 }, (v, i) => (
          <div key={i} className="item-list-img">
            <div className="links-wrap">
              <div className="links">
                <Skeleton width="252px" height="252px" />
              </div>
            </div>
            <div className="badge">
              <Skeleton className="badge-best" width="80px" height="20px">
                BEST&nbsp;
              </Skeleton>
            </div>
            <div className="item-list-img-text">
              <Skeleton className="img-title" width="100px" height="20px" />
              <Skeleton className="img-price" width="120px" height="20px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="item-list">
      <div className="item-list-header">
        <h2 className="item-list-title">
          {category_data.name}
          <span>총 {category_data.total_products} 개 좀 안됨 ㅋ</span>
        </h2>
        <p className="item-list-message">{category_data.description}</p>
      </div>
      <div className="item-list-message-wrap">
        <div className="item-list-recommend-text">
          <button
            className="button-least"
            onClick={() => {
              sort('NEW');
            }}
          >
            최신순 |
          </button>
          <button
            className="button-least"
            onClick={() => {
              sort('HIGH_PRICE');
            }}
          >
            높은 가격순 |
          </button>
          <button
            className="button-recommend"
            onClick={() => {
              sort('LOW_PRICE');
            }}
          >
            낮은 가격순
          </button>
        </div>
      </div>
      <div className="item-list-img-list">
        {products_data.map(listData => {
          return (
            <div key={listData.id} className="item-list-img">
              <div className="links-wrap">
                <div
                  className="links"
                  onClick={() => {
                    goToDetail(listData.id);
                  }}
                >
                  <img src={listData.images[0].url} alt="1" />
                </div>
              </div>
              <div className="badge">
                {listData.is_best && <span className="badge-best">BEST</span>}
                {listData.is_green && (
                  <span className="badge-green">GREEN</span>
                )}
              </div>
              <div className="item-list-img-text">
                <p className="img-title">{listData.name}</p>
                <p className="img-price">
                  {(priceMin * listData.price).toLocaleString('ko-KR')}원
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
