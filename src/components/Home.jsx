import React from "react";
import "./home.css";
import { Product } from "./Product";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="You title is here you can chage it"
            price="50"
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
          <Product
            title="You title is here you can chage it"
            price="50"
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="You title is here you can chage it"
            price="50"
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
          <Product
            title="You title is here you can chage it"
            price="50"
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
          <Product
            title="You title is here you can chage it"
            price="50"
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="You title is here you can chage it"
            price="50"
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
        </div>
      </div>
    </div>
  );
};
