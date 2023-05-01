import MainSector from "./style";

const Item = ({
  imgSrc,
  alt,
  title,
  type,
  volume,
  weight,
  price,
  ingredient,
  desc,
}) => {
  console.log(
    imgSrc,
    alt,
    title,
    type,
    volume,
    weight,
    price,
    ingredient,
    desc
  );
  return (
    <MainSector>
      <img src={imgSrc} alt={alt} />
      <h3 className="text-center">
        <a href="./detail.html">
          <span>{title}</span> <br />
          <span>{type}</span>
        </a>
      </h3>
      <div className="price-flex">
        <h3>
          {volume}
          <span>
            <sub>ML</sub>/ {weight}
            <sub>OZ</sub>
          </span>
        </h3>
        <h3 className="price">{price} KRW</h3>
      </div>
      <hr />
      <p>
        <strong>{ingredient}</strong>
        <br />
        {desc}
      </p>
      <p className="cart">
        <a href="#">Add to Cart</a>
      </p>
    </MainSector>
  );
};

export default Item;
