import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Search from '../Search/Search';

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

  const [scrollPosition, setScrollPosition] = useState(0);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const [category, setCategory] = useState('');
  const [isSearchOn, setisSearchOn] = useState(false);

  function handleSearchBarOn() {
    setisSearchOn(!isSearchOn);
  }

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const enterCart = () => {
    if (token) {
      navigate('/Cart');
    } else {
      alert('로그인이 필요합니다');
      navigate('/Login');
    }
  };

  const login = () => {
    navigate('/Login');
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    // navigate('/');
    window.location.replace('/');
  };

  const CategoryHandle = (id, category) => {
    navigate(`/products/${id}`);
    setCategory(category);
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
  }, []);

  return (
    <div className="nav">
      <header
        className={scrollPosition < 1 ? 'original-header' : 'change-header'}
      >
        <div className={`${scrollPosition < 1 ? 'nav-bar' : 'nav-bar active'}`}>
          <h1
            onClick={() => {
              window.location.replace('/');
              // navigate('/');
              // location.reload();
            }}
          >
            구방문방구
          </h1>
          <nav className="category">
            <ul className="nav-ul">
              {categoryList.map((categoryList, i) => {
                return (
                  <li
                    className={category === categoryList.text ? 'active' : ''}
                    onClick={() => {
                      CategoryHandle(categoryList.id, categoryList.text);
                    }}
                    key={categoryList.id}
                  >
                    {categoryList.text}
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul className="nav-icon">
            {user && (
              <li className="nav-username">
                <span>{user}님</span>
              </li>
            )}
            <li>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={handleSearchBarOn}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCartShopping}
                onClick={() => {
                  enterCart();
                }}
              />
            </li>
            <li>
              {!token ? (
                <span
                  className="loginBtn"
                  onClick={() => {
                    login();
                  }}
                >
                  로그인
                </span>
              ) : (
                <span
                  className="loginBtn"
                  onClick={() => {
                    logout();
                  }}
                >
                  로그아웃
                </span>
              )}
            </li>
            <li>
              <FontAwesomeIcon icon={faBars} />
            </li>
          </ul>
        </div>
      </header>
      <Search isSearchOn={isSearchOn} handleSearchBarOn={handleSearchBarOn} />
    </div>
  );
};

export default Nav;
