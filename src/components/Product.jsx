import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./product.css";
import { addToBusket } from "../redux/action/busket.js";
import { useDispatch } from "react-redux";

export const Product = ({ id, title, price, rating, img }) => {
  console.log(price)
  const dispatch = useDispatch();

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
              <StarIcon key={i} />
            ))}
        </div>
      </div>
      <img src={img} alt="" />

      <button
        onClick={() => {
          dispatch(addToBusket(id, title, price, rating, img));
        }}
      >
        Add to Busket
      </button>
    </div>
  );
};
