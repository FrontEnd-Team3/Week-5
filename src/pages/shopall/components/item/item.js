import MainSector from "./style";
import { Link } from "react-router-dom";

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
  num,
}) => {
  return (
    <MainSector>
      <Link to={`/${num}`}>
        <img src={imgSrc} alt={alt} />
      </Link>
      <h3 className="text-center">
        <a href="#">
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
