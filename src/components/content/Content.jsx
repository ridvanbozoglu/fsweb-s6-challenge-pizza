import React from "react";
import "./content.css";

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
            </div>
            <div className="small-coupons-container">
              <div className="small-coupon"></div>
              <div className="small-coupon"></div>
            </div>
          </div>
          <div className="product-selection">
            <div className="header"></div>
            <div className="scroll-products product-cards"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
