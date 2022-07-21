import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const categoryList = [
  { text: '전체', navi: '/ItemList' },
  { text: '문구', navi: '/ItemList' },
  { text: '책/매거진F', navi: '/ItemList' },
  { text: '구방그린', navi: '/ItemList' },
  { text: '구방친구들', navi: '/ItemList' },
  { text: '콜라보레이션', navi: '/ItemList' },
  { text: '명예의 전당', navi: '/ItemList' },
];
const iconList = [
  { icon: faMagnifyingGlass, navi: '', text: '' },
  { icon: faCartShopping, navi: '/Cart', text: '' },
  { icon: '', navi: '/Login', text: '로그인' },
  { icon: faBars, navi: '', text: '' },
];

const Nav = () => {
  const navigate = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      document.removeEventListener('scroll', updateScroll);
    };
  }, []);

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
                        navigate(categoryList.navi);
                      }}
                      key={i}
                    >
                      {categoryList.text}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <ul className="nav-icon">
            {iconList.map((iconList, i) => {
              return (
                <li key={i}>
                  {iconList.icon !== '' ? (
                    <FontAwesomeIcon
                      icon={iconList.icon}
                      onClick={() => {
                        navigate(iconList.navi);
                      }}
                    />
                  ) : (
                    <span
                      onClick={() => {
                        navigate(iconList.navi);
                      }}
                    >
                      {iconList.text}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Nav;
