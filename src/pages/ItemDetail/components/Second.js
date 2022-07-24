import React from 'react';
import './Second.scss';

const Second = () => {
  return (
    <section className="item-detail-view-box-guide">
      <h3 className="blind">기본정보</h3>
      <h4 className="item-detail-view-guide">배송안내</h4>
      <div className="item-detail-view-guide-text">
        <p className="title">배송사</p>
        <p>CJ대한통운</p>
      </div>
      <div className="item-detail-view-guide-text">
        <p className="title">배송비</p>
        <p>
          3,000원 (30,000원 이상 구매 시 무료배송)
          <br />
          도서, 산간 일부지역은 배송비가 추가될 수 있습니다.
        </p>
      </div>
      <div className="item-detail-view-guide-text">
        <p className="title">배송기간</p>
        <p>
          오후 1시 이전 결제완료시 당일 출고 (영업일 기준)
          <br />
          단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될
          수 있는 점 양해 부탁드립니다.
        </p>
      </div>
      <h4 className="item-detail-view-guide">교환안내</h4>
      <ul className="item-detail-view-guide-text-refund">
        <li>
          주문 취소 및 배송지 변경은 “결제완료” 단계에서만 가능합니다.
          <br />
          (마이페이지에서 취소 또는 변경하실 수 있습니다.)
        </li>
        <li>"상품준비중" 단계에서는 주문 취소 및 배송지 변경이 불가합니다.</li>
        <li>
          교환 및 반품은 배송완료 후 7일 이내에 가능합니다.
          <br />
          단, 재화 등의 내용이 표시, 광고 내용과 다르거나 계약내용을 다르게
          이행한 경우에는 재화 등을 공급받은 날로부터 3개월 이내,
          <br />그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 교환 및
          반품이 가능합니다.
        </li>
        <li>
          다음의 경우 교환 및 반품이 불가합니다.
          <br />
          - 구매자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우 이행한 -
          경우에는 재화 등을 공급받은 날로부터 3개월 이내,
          <br />
          - 구매자의 사용 또는 일부 소비에 의해 재화 등의 가치가 현저히 감소한
          경우
          <br />
          - 시간 경과에 의하여 재판매가 곤란할 정도로 상품의 가치가 현저히
          감소한 경우
          <br />- 고객의 주문에 따라 개별 생산되는 상품의 경우
        </li>
        <li>
          상품의 불량/하자 및 표시광고 및 계약 내용이 다른 경우 해당 상품의 회수
          비용은 무료입니다.
        </li>
        <li>
          고객님의 단순변심에 의한 교환/반품일 경우에는 교환/반품 배송비(왕복
          배송비) 6,000원을 고객님께서 부담하셔야 합니다.
        </li>
        <li>
          반송지 : 서울특별시 강남구 테헤란로 427 위워크타워 10층 구방문방구
          물류센터
        </li>
      </ul>
      <h4 className="item-detail-view-guide">환불안내</h4>
      <div className="item-detail-view-guide-text">
        <p>
          주문취소 및 반품 시 환불은 주문 시 이용하신 결제수단으로 2~7 영업일
          이내 환불됩니다.
        </p>
      </div>
      <h4 className="item-detail-view-guide">AS안내</h4>
      <ul className="item-detail-view-guide-text-as">
        <li>
          제품에 문제가 있으신 경우, 배민문방구 고객센터로 접수해주시면 안내
          도와드리겠습니다.
        </li>
        <li>
          배민문방구에서 발생한 문제는 소비자분쟁해결 기준(공정거래위원회
          고시)에 따라 피해를 보상받을 수 있습니다.
        </li>
      </ul>
    </section>
  );
};

export default Second;
