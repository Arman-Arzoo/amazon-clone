import React from "react";
import "./checkout.css";
import { SubTotal } from "./SubTotal";
export const CheckOut = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.webfx.com/blog/wp-content/uploads/2019/10/banner-ad-example-online.png"
          alt=""
        />
        <div>
          <h3 className="checkout__title">Your Shopping Basket</h3>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};
