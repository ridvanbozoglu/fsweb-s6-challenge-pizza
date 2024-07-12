import React from "react";
import "./footer.css";

const iletisim = [
  {
    imgSrc: "../../../public/assets/iteration-2/footer/icons/icon-1.png",
    p: "341 Londonderry Road, Istanbul Türkiye",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/footer/icons/icon-2.png",
    p: "aciktim@teknolojikyemekler.com",
  },
  {
    imgSrc: "../../../public/assets/iteration-2/footer/icons/icon-3.png",
    p: "+90 216 123 45 67",
  },
];
const hotMenu = [
  "Terminal Pizza",
  "5 Kişilik Hackalthlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz  Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
];
const instagramImg = [
  "./../../public/assets/iteration-2/footer/insta/li-0.png",
  "./../../public/assets/iteration-2/footer/insta/li-1.png",
  "./../../public/assets/iteration-2/footer/insta/li-2.png",
  "./../../public/assets/iteration-2/footer/insta/li-3.png",
  "./../../public/assets/iteration-2/footer/insta/li-4.png",
  "./../../public/assets/iteration-2/footer/insta/li-5.png",
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-container">
        <div className="inner-div">
          <h1>Teknolojik Yemekler</h1>
          <ul className="ul-iletisim">
            {iletisim.map((element) => {
              return (
                <li key={element.p}>
                  <img
                    className="img-iletisim"
                    src={element.imgSrc}
                    alt="logo"
                  />
                  <p className="p-iletisim">{element.p}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="inner-div">
          <h3>Hot Menu</h3>
          <ul className="hot-menu-ul">
            {hotMenu.map((element, index) => {
              return (
                <li key={index}>
                  <p className="p-hot-menu">{element}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="inner-div">
          <h3>Instagram</h3>
          <ul className="instagram-ul">
            {instagramImg.map((element) => {
              return (
                <li key={element}>
                  <img src={element} alt="instagram img" className="ins-img" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="copy-right">
        <p>© 2023 Teknolojik Yemekler. </p>
        <p>Twit</p>
      </div>
    </div>
  );
};

export default Footer;
