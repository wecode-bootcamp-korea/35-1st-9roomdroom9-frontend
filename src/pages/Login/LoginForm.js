import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form className="login-form">
      <h2 className="login-title">로그인</h2>
      <div className="login-contnet">
        <ul className="login-form-list">
          {INPUT_DATA.map(input => {
            return (
              <li key={input.id}>
                <div className="input-box-error">
                  <input type={input.type} placeholder={input.placeholder} />
                  <p className="text-valid">{input.valid}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="login-button">
        <button className="login-button-submit" disabled>
          로그인
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

const INPUT_DATA = [
  {
    id: 1,
    type: 'eamil',
    placeholder: '이메일',
    valid: '이메일을 입력해주세요',
  },
  {
    id: 2,
    type: 'password',
    placeholder: '패스워드',
    valid: '패스워드를 입력해주세요',
  },
];
