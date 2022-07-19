import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className="Login">
      <div className="login-container">
        <form className="login-form">
          <h2 className="login-title">로그인</h2>

          <div className="login-contnet">
            <ul className="login-form-list">
              <li>
                <div className="input-box-error">
                  <input type="text" placeholder="아이디" />
                  <p className="text-valid">아이디를 입력해주세요.</p>
                </div>
              </li>

              <li>
                <div className="input-box-error">
                  <input type="text" placeholder="비밀번호" />
                  <p className="text-valid">비밀번호를 입력해주세요.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="login-button">
            <button className="login-button-submit" disabled>
              로그인
            </button>
          </div>
        </form>

        <ul className="login-nav">
          <li>
            <Link to="">회원가입</Link>
          </li>
          <li>
            <Link to="">아이디 찾기</Link>
          </li>
          <li>
            <Link to="">비밀번호 찾기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
