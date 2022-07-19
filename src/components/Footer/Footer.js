import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInner">
        <div className="footerLogo">
          <h2>구방문방구</h2>
        </div>
        <div className="footerDiv">
          <nav className="footerNav">
            <ul className="footerUl">
              <li>About</li>
              <li>공지사항</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>대량구매/제휴안내</li>
            </ul>
            <p> @9roomd_store</p>
          </nav>
          <div className="footerInfo">
            <p>상호 : (주)구방문방구</p>
            <p>대표 : 엄성훈</p>
            <p>사업자등록번호 : 123-45-67890</p>
            <p>통신판매업신고번호 : 2022-서울</p>
            <p>사업자정보확인</p>
            <p>대표번호 : 1234-5678</p>
            <p>이메일 : abc123@abc.com</p>
            <p>주소 : 서울특별시 강남구 테헤란로 427 </p>
            <p>호스팅제공 : (주)구방문방구</p>
          </div>
          <p>© 9roomdroom9 Corp. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
