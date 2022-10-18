import React from 'react';
import './Footer.scss';

const Footer = () => {
  const ulList = [
    { text: 'About' },
    { text: '공지사항' },
    { text: '이용약관' },
    { text: '개인정보처리방침' },
    { text: '대량구매/제휴안내' },
  ];

  const infoList = [
    { text: '상호 : (주)구방문방구' },
    { text: '대표 : 예빈부기대장' },
    { text: '사업자등록번호 : 123-45-67890' },
    { text: '통신판매업신고번호 : 2022-서울' },
    { text: '사업자정보확인' },
    { text: '대표번호 : 1234-5678' },
    { text: '이메일 : abc123@abc.com' },
    { text: '주소 : 서울특별시 강남구 테헤란로 427' },
    { text: '호스팅제공 : (주)구방문방구' },
  ];

  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <h2>구방문방구</h2>
        </div>
        <div className="footer-div">
          <nav className="footer-nav">
            <ul className="footer-ul">
              {ulList.map((text, i) => {
                return <li key={i}>{text.text}</li>;
              })}
            </ul>
            <p>&nbsp;@9roomd_store</p>
          </nav>
          <div className="footer-info">
            {infoList.map((text, i) => {
              return <li key={i}>{text.text}&nbsp;</li>;
            })}
          </div>
          <p>© 9roomdroom9 Corp. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
