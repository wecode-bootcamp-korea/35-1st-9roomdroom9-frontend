import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const navigate = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header
      className={scrollPosition < 1 ? 'original_header' : 'change_header'}
    >
      <div className="navBar">
        <h1
          onClick={() => {
            navigate('/');
          }}
        >
          구방문방구
        </h1>
        <ul className="navIcon">
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={() => {
                navigate('/Cart');
              }}
            />
          </li>
          <li>
            <span
              onClick={() => {
                navigate('/Login');
              }}
            >
              로그인
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
      <nav className="category">
        <ul className="navUl">
          <li
            onClick={() => {
              navigate('/ItemList');
            }}
          >
            전체
          </li>
          <li
            onClick={() => {
              navigate('/ItemList');
            }}
          >
            문구
          </li>
          <li
            onClick={() => {
              navigate('/ItemList');
            }}
          >
            리빙
          </li>
          <li
            onClick={() => {
              navigate('/ItemList');
            }}
          >
            책/매거진F
          </li>
          <li
            onClick={() => {
              navigate('/ItemList');
            }}
          >
            배민그린
          </li>
          <li
            onClick={() => {
              navigate('/ItemList');
            }}
          >
            배달이친구들
          </li>
          <li
            onClick={() => {
              navigate('/ItemList');
            }}
          >
            콜라보레이션
          </li>
          <li
            onClick={() => {
              navigate('/ItemList');
            }}
          >
            명예의 전당
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
