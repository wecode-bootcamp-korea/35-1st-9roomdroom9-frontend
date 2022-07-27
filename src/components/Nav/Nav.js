import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const categoryList = [
  { id: 1000, text: '전체' },
  { id: 1, text: '문구' },
  { id: 2, text: '책/매거진F' },
  { id: 3, text: '구방그린' },
  { id: 4, text: '구방친구들' },
  { id: 5, text: '콜라보레이션' },
  { id: 6, text: '명예의 전당' },
];

const Nav = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const CategoryHandle = id => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      document.removeEventListener('scroll', updateScroll);
    };
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setUser(localStorage.getItem('name'));
  }, [params]);

  return (
    <div className="nav">
      <header
        className={scrollPosition < 1 ? 'original-header' : 'change-header'}
      >
        <div className="nav-bar">
          <div>
            <h1
              onClick={() => {
                navigate('/');
              }}
            >
              구방문방구
            </h1>
            <nav className="category">
              <ul className="nav-ul">
                {categoryList.map((categoryList, i) => {
                  return (
                    <li
                      onClick={() => {
                        CategoryHandle(categoryList.id);
                      }}
                      key={categoryList.id}
                    >
                      {categoryList.text}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <ul className="nav-icon">
            <li className="nav-username">
              <span>{user}</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={() => {
                  navigate('/');
                }}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCartShopping}
                onClick={() => {
                  if (token) {
                    navigate('/Cart');
                  } else {
                    alert('로그인이 필요합니다');
                    navigate('/Login');
                  }
                }}
              />
            </li>
            <li>
              {!token ? (
                <span
                  className="loginBtn"
                  onClick={() => {
                    navigate('/Login');
                  }}
                >
                  로그인
                </span>
              ) : (
                <span
                  className="loginBtn"
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('name');
                    navigate('/');
                  }}
                >
                  로그아웃
                </span>
              )}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                  navigate('/');
                }}
              />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Nav;
