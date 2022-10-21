import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../../config';
import './JoinForm.scss';

const JoinForm = () => {
  const navigate = useNavigate();

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const postUserData = e => {
    e.preventDefault();
    fetch(`${PROXY}/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        name: userName,
        email: userId,
        mobile_number: userPhoneNumber,
        password: userPw,
        birthday: userBirthday,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('회원 가입을 환영합니다!');
          navigate('/Login');
        } else if (result.message === 'KEY_ERROR') {
          alert('무슨 에러일까요? 테스트해봐요');
        } else if (result.message === 'EXIST_MOBILE_NUMBER') {
          alert('이미 존재하는 핸드폰 번호입니다.');
        } else if (result.message === 'EXIST_EMAIL') {
          alert('이미 존재하는 이메일 입니다.');
        } else if (result.message === 'INVALID_NAME') {
          alert('이름을 다시 확인해주세요.');
        }
      });
  };

  const [inputValue, setInputValue] = useState({
    userId: '',
    userPw: '',
    pwCheck: '',
    userName: '',
    userPhoneNumber: '',
    userBirthday: null,
  });

  const { userId, userPw, pwCheck, userName, userPhoneNumber, userBirthday } =
    inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const REGEX_EMAIL = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const REGEX_PASSWORD =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[?!@#$%*&])[A-Za-z\d?!@#$%*&]{8,}$/;
  const REGEX_NAME = /^[가-힣]{2,5}$/;
  const REGEX_PHONE_NUMBER = /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;
  const REGEX_BIRTHDAY =
    /^(19\d{2}|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  const REGEX_ARRAY = [
    REGEX_EMAIL.test(userId),
    REGEX_PASSWORD.test(userPw),
    pwCheck.length === 0 ? false : pwCheck === userPw,
    REGEX_NAME.test(userName),
    REGEX_PHONE_NUMBER.test(userPhoneNumber),
  ];

  const isValid =
    REGEX_PASSWORD.test(userPw) &&
    pwCheck === userPw &&
    REGEX_NAME.test(userName) &&
    REGEX_EMAIL.test(userId) &&
    REGEX_PHONE_NUMBER.test(userPhoneNumber) &&
    (REGEX_BIRTHDAY.test(userBirthday) || userBirthday === null);

  return (
    <form className="join-form" onSubmit={postUserData}>
      <h2 className="join-title">회원가입</h2>
      <div className="join-contnet">
        <ul className="join-form-list">
          {JOIN_INPUT_DATA.map((input, i) => {
            return (
              <li key={input.id}>
                <div className="input-box-error">
                  <input
                    onChange={handleInput}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    autoFocus={input.autoFocus}
                    autocomplete="off"
                  />
                </div>
                {REGEX_ARRAY[i] ? (
                  ''
                ) : (
                  <p className="text-valid">{input.valid}</p>
                )}
              </li>
            );
          })}
          <li>
            <div className="input-box-birthday">
              <input
                type="text"
                name="userBirthday"
                placeholder="생일정보"
                onChange={handleInput}
                autocomplete="off"
              />
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
        <button className="join-button-submit" disabled={!isValid}>
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
    valid: '새 비밀번호를 꼭 입력해주세요. (*숫자, 특수문자 포함)',
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
    valid: '핸드폰 번호를 `-` 를 넣어서 입력해주세요.',
    autoFocus: false,
  },
];
