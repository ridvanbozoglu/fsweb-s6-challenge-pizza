import React, { useState, useEffect } from "react";
import "./content.css";
import Card from "../ui/Card";

const productImagesUp = [
  {
    imgSrc: "../../../public/assets/iteration-2/icons/1.svg",
    p1: "YENİ! Kore",
    p2: "Ramen",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/icons/2.svg",
    p1: "Pizza",
    p2: "Pizza",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/icons/3.svg",
    p1: "Burger",
    p2: "Burger",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/icons/4.svg",
    p1: "Kızartmalar",
    p2: "French fries",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/icons/5.svg",
    p1: "Fast food",
    p2: "Fast food",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/icons/6.svg",
    p1: "Gazlı İçecek",
    p2: "Soft Drinks",
  },
];

const coupons = [
  {
    imgSrc: "../../../public/assets/iteration-2/cta/kart-1.png",
    p1: "Özel Lezzetus",
    p2: "Position:Absolute Acı Burger",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/cta/kart-2.png",
    p1: "Heckathlon Burger Menü",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/cta/kart-3.png",
    p1: "Çoooook Hızlı Npm gibi kurye",
  },
];

const pizzas = [
  {
    name: "Terminal Pizza",
    rating: 4.9,
    radius: 200,
    price: 60,
    imgUrl: "../../../public/assets/iteration-2/pictures/food-1.png",
  },
  {
    name: "Position Absoulute Pizza",
    rating: 4.9,
    radius: 200,
    price: 60,
    imgUrl: "../../../public/assets/iteration-2/pictures/food-2.png",
  },
  {
    name: "useEffect Tavuklu Burger",
    rating: 4.9,
    radius: 200,
    price: 60,
    imgUrl: "../../../public/assets/iteration-2/pictures/food-3.png",
  },
];

const Content = () => {
  return (
    <div className="content-container">
      <div className="small-product-images">
        <ul className="content-top-ul">
          {productImagesUp.map((element) => {
            return (
              <li className="content-top-list" key={element.p1}>
                <img
                  className="small-product-img"
                  src={element.imgSrc}
                  alt="image"
                />
                <p className="product-description">{element.p1}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="content-inner-container">
        <div className="content-2inner-container">
          <div className="coupones-container">
            <div className="big-coupon">
              <img src={coupons[0].imgSrc} alt="hi" />
              <div className="coupon-content">
                <h4 className="first-h4">{coupons[0].p1}</h4>
                <p>{coupons[0].p2}</p>
                <div className="coupon-button">SİPARİŞ VER</div>
              </div>
            </div>
            <div className="small-coupons-container">
              <div className="small-coupon">
                <img src={coupons[1].imgSrc} alt="hi" />
                <div className="coupon-content">
                  <h4 className="second-coupon">{coupons[1].p1}</h4>
                  <div className="coupon-button">SİPARİŞ VER</div>
                </div>
              </div>
              <div className="small-coupon">
                <img src={coupons[2].imgSrc} alt="hi" />
                <div className="coupon-content">
                  <h3>
                    <span>Çoooook</span> hızlı npm gibi kurye
                  </h3>
                  <div className="coupon-button">SİPARİŞ VER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-selection">
            <div className="scroll-products-container">
              <div className="content-scroll-explanation">
                <p className="red-paragraph">en çopk paketlenen menüler</p>
                <p className="acıktıran-doyuran-kodlar">
                  Acıktıran Kodlara Doyuran Lezzeetler
                </p>
              </div>
              <div className="content-selection">
                <div className="small-product-images-bottom">
                  <ul className="content-top-ul-bottom">
                    {productImagesUp.map((element) => {
                      return (
                        <li
                          className="content-top-list-bottom"
                          key={element.p2}
                        >
                          <img
                            className="small-product-img"
                            src={element.imgSrc}
                            alt="image"
                          />
                          <p className="product-description">{element.p2}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="product-cards">
                <ul className="content-items-container-ul">
                  {pizzas.map((element) => {
                    return (
                      <li key={element.name}>
                        <Card {...element} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
