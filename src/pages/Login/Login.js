import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <LoginForm />
        <ul className="login-nav">
          {INPUT_NAV_DATA.map(nav => {
            return (
              <li key={nav.id}>
                <Link to="/Join">{nav.link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Login;

const INPUT_NAV_DATA = [
  { id: 1, link: '회원가입' },
  { id: 2, link: '아이디 찾기' },
  { id: 3, link: '비밀번호 찾기' },
];
