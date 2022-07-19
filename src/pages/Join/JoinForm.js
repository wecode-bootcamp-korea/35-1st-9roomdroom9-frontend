import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinForm.scss';

const JoinForm = () => {
  const navigate = useNavigate();

  const postUserData = e => {
    e.preventDefault();
    navigate('/login');
  };

  const [inputValue, setInputValue] = useState({
    userId: '',
    userPw: '',
    pwCheck: '',
    userName: '',
    userPhoneNumber: '',
  });

  const { userId, userPw, pwCheck, userName, userPhoneNumber } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const [disabled, setDisabled] = useState(true);
  const isDisabled = () => {
    userId.includes('.') &&
    userId.length >= 5 &&
    userPw.length >= 5 &&
    pwCheck === userPw &&
    userName.length > 3 &&
    userPhoneNumber.length > 0
      ? setDisabled(false)
      : setDisabled(true);
  };

  return (
    <form
      className="join-form"
      onSubmit={postUserData}
      onKeyUp={isDisabled}
      onChange={handleInput}
    >
      <h2 className="join-title">회원가입</h2>
      <div className="join-contnet">
        <ul className="join-form-list">
          {JOIN_INPUT_DATA.map(input => {
            return (
              <li key={input.id}>
                <div className="input-box-error">
                  <input
                    className="inputtype"
                    onChange={handleInput}
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
          <li>
            <div className="input-box-birthday">
              <input type="text" placeholder="생일정보" />
              <p className="text-valid">
                &#183; 생일을 정확하게 입력해주세요. (예: 2000-12-31)
              </p>
              <p className="text-valid">
                &#183; 만 14세 이상만 회원가입이 가능합니다.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="join-button">
        <button className="join-button-submit" disabled={disabled}>
          회원가입
        </button>
      </div>
    </form>
  );
};

export default JoinForm;

const JOIN_INPUT_DATA = [
  {
    id: 1,
    name: 'userId',
    type: 'eamil',
    placeholder: '이메일',
    valid: '아이디로 사용 할 이메일을 입력해주세요',
    autoFocus: true,
  },
  {
    id: 2,
    name: 'userPw',
    type: 'password',
    placeholder: '비밀번호',
    valid: '새 비밀번호를 꼭 입력해주세요.',
    autoFocus: false,
  },
  {
    id: 3,
    name: 'pwCheck',
    type: 'password',
    placeholder: '비밀번호 확인',
    valid: '새 비밀번호를 한번 더 입력해주세요.',
    autoFocus: false,
  },
  {
    id: 4,
    name: 'userName',
    type: 'text',
    placeholder: '이름',
    valid: '이름을 입력해주세요.',
    autoFocus: false,
  },
  {
    id: 5,
    name: 'userPhoneNumber',
    type: 'text',
    placeholder: '핸드폰 번호',
    valid: '핸드폰 번호를 입력해주세요.',
    autoFocus: false,
  },
];
