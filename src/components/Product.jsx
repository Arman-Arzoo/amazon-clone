import React from "react";

import "./product.css";
export const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>info about produt</p>
        <p className="product__price">
          <small>$</small>
          <strong>10.21</strong>
        </p>

        <div className="product__rating">
          <p>start</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
        alt=""
      />

      <button>Add to Busket</button>
    </div>
  );
};
