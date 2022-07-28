import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../config';
import './ItemList.scss';

const ItemList = () => {
  const [list, setList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const { category_data, products_data } = list;

  const getData = useCallback(() => {
    fetch(
      `${BASE_URL}/products/${params.id}?offset=${(pageNum - 1) * 10}&limit=10`
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
  }, [pageNum, params.id]);

  useEffect(() => {
    pageNum !== 1 && getData();
  }, [pageNum, getData]);

  useEffect(() => {
    fetch(`${BASE_URL}/products/${params.id}?offset=0&limit=10`)
      .then(res => res.json())
      .then(data => {
        setList(data);
      });
    setPageNum(1);
  }, [params.id]);

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

  const sortLow = () => {
    fetch(`${BASE_URL}/products/${params.id}?sorting=LOW_PRICE`)
      .then(res => res.json())
      .then(data => {
        setList(data);
      });
  };

  const sortNew = () => {
    fetch(`${BASE_URL}/products/${params.id}?sorting=NEW`)
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
    <div className="loading">로딩중입니다....</div>
  ) : (
    <div className="item-list">
      <div className="item-list-header">
        <h2>
          {category_data.name}
          <span>총 {category_data.total_products} 개 좀 안됨 ㅋ</span>
        </h2>
        <p className="item-list-message">{category_data.description}</p>
      </div>
      <div className="item-list-message-wrap">
        <div className="item-list-recommend-text">
          <button
            className="button-recommend"
            onClick={() => {
              sortLow();
            }}
          >
            낮은 가격순
          </button>
          <button
            className="button-least"
            onClick={() => {
              sortNew();
            }}
          >
            최신순
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
                {listData.is_best === true ? (
                  <span className="badge-best">BEST&nbsp;</span>
                ) : (
                  <span className="badge-green" />
                )}
                {listData.is_green === true ? (
                  <span className="badge-green">GREEN</span>
                ) : (
                  <span className="badge-best" />
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
