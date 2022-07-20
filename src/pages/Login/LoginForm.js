import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = () => {
  const navigate = useNavigate();
  const postUserData = e => {
    e.preventDefault();
    navigate('/');
  };

  const [inputValue, setInputValue] = useState({
    userId: '',
    userPw: '',
  });

  const { userId, userPw } = inputValue;
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const [disabled, setDisabled] = useState(true);
  const isDisabled = () => {
    userId.includes('@') &&
    userId.includes('.') &&
    userId.length >= 5 &&
    userPw.length >= 5
      ? setDisabled(false)
      : setDisabled(true);
  };

  return (
    <form
      className="login-form"
      onSubmit={postUserData}
      onKeyUp={isDisabled}
      onChange={handleInput}
    >
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
                  />
                  <p className="text-valid">{input.valid}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="login-button">
        <button className="login-button-submit" disabled={disabled}>
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
