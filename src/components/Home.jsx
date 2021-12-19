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
            id={1}
            title="You title is here you can chage it ssssssssssssssssssssssssssssssssssssssssssssssssssss"
            price={50}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
          <Product
            id={2}
            title="You title is here you can chage it"
            price={150}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="You title is here you can chage it"
            price={60}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
          <Product
            id={4}
            title="You title is here you can chage it"
            price={70}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
          <Product
            id={5}
            title="You title is here you can chage it"
            price={80}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="You title is here you can chage it"
            price={90}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
          />
        </div>
      </div>
    </div>
  );
};
