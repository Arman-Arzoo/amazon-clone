import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./product.css";
import { useStateValue } from "../StateProvider";

export const Product = ({ id, title, price, rating, img }) => {
  const [state, dispatch] = useStateValue();
  console.log("state", state);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={img} alt="" />

      <button
        onClick={() => {
          addToBasket();
        }}
      >
        Add to Busket
      </button>
    </div>
  );
};
