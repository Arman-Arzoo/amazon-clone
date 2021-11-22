import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./product.css";
export const Product = ({ title, price, rating, img }) => {
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

      <button>Add to Busket</button>
    </div>
  );
};
