import React from "react";
import "./checkout.css";
import { CheckOutProduct } from "./CheckOutProduct";
import { SubTotal } from "./SubTotal";
import { useSelector } from "react-redux";

export const CheckOut = () => {

  const buskets = useSelector((state) => state.busket);


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


          {
            buskets?.map(item => (

              <CheckOutProduct key={item.id}
                id={item.id}
                price={item.price}
                rating={item.rating}
                title={item.title}
                img={item.img} />
            ))

          }


        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};
