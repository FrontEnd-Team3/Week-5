import Item from "./components/item/item";
import ShopSection from "./components/shop-section/style";

const ShopAll = () => {
  const items = [
    {
      imgSrc: "img/제품1.jpeg",
      alt: "제품1",
      title: "GENTLE NIGHT",
      type: "Portable Perfume",
      volume: 100,
      weight: 3.3,
      price: 128000,
      ingredient: "Suede, White tea, Fig, Moss, Cedarwood, Musk.",
      desc: "달콤한 스웨이드와 차분한 시더우드,바닐라와 머스크가 어우러진 포근함과 중성성.세계적인 조향사들이 논픽션을 위해 그려낸 고유한 향의 내러티브를 향수로 담았습니다.엄선된 원료만을 사용하되 과시적이거나 인위적이지 않은,자연스러운 싱그러움을 전합니다.",
    },
    {
      imgSrc: "img/제품2.jpeg",
      alt: "제품2",
      title: "GENTLE NIGHT",
      type: "Portable Perfume",
      volume: 30,
      weight: 1.0,
      price: 59000,
      ingredient: "Suede, White tea, Fig, Moss, Cedarwood, Musk.",
      desc: "달콤한 스웨이드와 차분한 시더우드,바닐라와 머스크가 어우러진포근함과 중성성.세계적인 조향사들이 논픽션을 위해 그려낸 고유한 향의내러티브를 향수로 담았습니다.엄선된 원료만을 사용하되 과시적이거나인위적이지 않은, 자연스러운 싱그러움을 전합니다.",
    },
    {
      imgSrc: "img/제품3.jpeg",
      alt: "제품3",
      title: "SANTAL CREAM",
      type: "Perfume",
      volume: 100,
      weight: 3.3,
      price: 128000,
      ingredient: "Sandalwood, Vetiver, Fig Cardamom, Ginger, Bergamot.",
      desc: "베티버와 샌달우드, 신선한 무화과와 카다멈의 조화가 빚어내는 고요함과나름함. 세계적인 조향사들이 논픽션을 위해 그려낸 고유한 향의내러티브를 향수로 담았습니다.엄선된 원료만을 사용하되 과시적이거나인위적이지 않은,자연스러운 싱그러움을 전합니다.",
    },
    {
      imgSrc: "img/제품4.jpeg",
      alt: "제품4",
      title: "SANTAL CREAM",
      type: "Portable Perfume",
      volume: 30,
      weight: 3.3,
      price: 59000,
      ingredient: "Sandalwood, Vetiver, Fig, Cardamom, Ginger, Bergamot.",
      desc: "베티버와 샌달우드,신선한 무화과와 카다멈의 조화가 빚어내는 고요함과나른함.가볍게 휴대할 수 있는 포터블 사이즈의 오드퍼퓸입니다.언제어디서든,내면의 힘을 깨우는 즉각적인 리프레시를 느낄 수 있습니다.",
    },
  ];
  return (
    <ShopSection>
      {items.map((item, i) => (
        <Item {...item} key={i + 1} />
      ))}
    </ShopSection>
  );
};

export default ShopAll;