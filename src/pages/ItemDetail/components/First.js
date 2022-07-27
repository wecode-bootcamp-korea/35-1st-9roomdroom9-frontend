import React from 'react';
import './First.scss';

const First = () => {
  return (
    <section className="item-detail-view-box">
      <h3 className="blind">상품정보</h3>
      <div className="item-detail-info-img">
        <img
          src="/images/itemDetail/itemDetail01.png"
          alt="상세설명상품 첫번째"
        />
        <img
          src="/images/itemDetail/itemDetail02.png"
          alt="상품설명상품 두번째"
        />
      </div>
      <div className="item-detail-info">
        <h4>상품상세정보</h4>
        <table>
          <tbody>
            {ITEM_DETAIL_DATA.map((data, idx) => {
              return (
                <tr key={idx}>
                  <th>{data.title}</th>
                  <td>{data.explain}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default First;

const ITEM_DETAIL_DATA = [
  {
    id: 1,
    title: '제품명',
    explain: '위스티커 멋저부령',
  },
  {
    id: 2,
    title:
      '법에 의한 인증 · 허가 등을 받았음을 확인할 수 있는 경우 그에 대한 사항',
    explain: '해당없음',
  },
  {
    id: 3,
    title: '크기',
    explain: '70x95mm',
  },
  {
    id: 3,
    title: '제조국',
    explain: '한국',
  },
  {
    id: 4,
    title: '사용연령',
    explain: '8세 이상',
  },
  {
    id: 5,
    title: '상품문의',
    explain: '1:1 문의게시판으로 문의해주세요.',
  },
];
