import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../../config';
import './LoginForm.scss';

const LoginForm = () => {
  // const navigate = useNavigate();

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const postUserData = e => {
    e.preventDefault();
    fetch(`${PROXY}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          localStorage.setItem('name', result.name);
          alert(`로그인을 환영합니다 ${userId}님`);
          // navigate('/');
          window.location.replace('/');
        } else if (result.message === 'INVALID_USER') {
          alert(
            '아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
          );
        } else if (result.message === 'User matching query does not exist.') {
          alert(
            '아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
          );
        }
      });
  };

  const [inputValue, setInputValue] = useState({
    userId: '',
    userPw: '',
  });

  // console.log(inputValue);

  const { userId, userPw } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const REGEX_EMAIL = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const REGEX_PASSWORD =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[?!@#$%*&])[A-Za-z\d?!@#$%*&]{8,}$/;

  const isValid = REGEX_EMAIL.test(userId) && REGEX_PASSWORD.test(userPw);

  const REGEX_ARRAY = [REGEX_EMAIL.test(userId), REGEX_PASSWORD.test(userPw)];

  return (
    <form className="login-form" onSubmit={postUserData} onChange={handleInput}>
      <h2 className="login-title">로그인</h2>
      <div className="login-contnet">
        <ul className="login-form-list">
          {INPUT_DATA.map((input, i) => {
            return (
              <li key={input.id}>
                <div className="input-box-error">
                  <input
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    autoFocus={input.autoFocus}
                    autoComplete="off"
                  />
                  {REGEX_ARRAY[i] ? (
                    ''
                  ) : (
                    <p className="text-valid">{input.valid}</p>
                  )}
                  {/* <p className="text-valid">{input.valid}</p> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="login-button">
        <button className="login-button-submit" disabled={!isValid}>
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
    name: 'userId',
    type: 'eamil',
    placeholder: '이메일',
    valid: '이메일을 입력해주세요',
    autoFocus: true,
  },
  {
    id: 2,
    name: 'userPw',
    type: 'password',
    placeholder: '패스워드',
    valid: '패스워드를 입력해주세요',
    autoFocus: false,
  },
];
