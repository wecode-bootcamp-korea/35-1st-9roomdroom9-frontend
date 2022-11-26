import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import './LoginForm.scss';

const LoginForm = () => {
  const navigate = useNavigate();

  // async await axios로 변환과 에러 핸들링을 적용 해본다.
  const postUserData = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/users/login`,
        {
          email: userId,
          password: userPw,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('name', response.data.name);
        alert(`로그인을 환영합니다 ${userId}님`);
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      if (error.response.data.message === 'INVALID_USER') {
        alert(
          '아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
        );
      }
      if (error.response.data.message === 'User_DoseNotExist') {
        alert(
          '아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
        );
      }
      console.error('에러발생', error.response.data.message);
    }
  };

  // fetch에 대한 부분 학습용으로 저장
  // const postUserData = e => {
  //   e.preventDefault();
  //   fetch(`${BASE_URL}/users/login`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: userId,
  //       password: userPw,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       if (result.access_token) {
  //         localStorage.setItem('token', result.access_token);
  //         localStorage.setItem('name', result.name);
  //         alert(`로그인을 환영합니다 ${userId}님`);
  //         navigate('/');
  //         window.location.reload();
  //       } else if (result.message === 'INVALID_USER') {
  //         alert(
  //           '아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
  //         );
  //       } else if (result.message === 'User matching query does not exist.') {
  //         alert(
  //           '아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
  //         );
  //       }
  //     });
  // };

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

  const REGEX_PASSWORD =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[?!@#$%*&])[A-Za-z\d?!@#$%*&]{8,}$/;
  const REGEX_EMAIL = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

  const isValid = REGEX_EMAIL.test(userId) && REGEX_PASSWORD.test(userPw);

  return (
    <form className="login-form" onSubmit={postUserData} onChange={handleInput}>
      <h2 className="login-title">로그인</h2>
      <div className="login-contnet">
        <ul className="login-form-list">
          {INPUT_DATA.map(input => {
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
                  <p className="text-valid">{input.valid}</p>
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
