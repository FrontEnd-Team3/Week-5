const ProductWrapper = () => {
  return (
    <section className="product_img_wrapper">
      <div className="big_slider">
        <div className="service_explain_header">
          <button className="left"></button>
          <div className="big_image">
            <img src="./img/thumbnail1.jpeg" alt="" />
          </div>
          <button className="right"></button>
        </div>
      </div>
      <div className="service_explain">
        <p>무료 선물 포장 서비스</p>
        <div className="service_explain_contents">
          <p>
            주문서 단계에서 '무료 선물 포장' 옵션 선택 가능
            <br />
            네이버페이, 악세사리 단품 구매 시 포장 서비스 선택 불가
            <br />
            기프트 박스 포장이 기본 제공되는 상품에는 추가 선물 포장 서비스 제공
            불가
          </p>
        </div>
      </div>
    </section>
  );
};
