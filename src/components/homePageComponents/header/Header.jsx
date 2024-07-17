import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order");
  };

  return (
    <div className="home-header-container">
      <div className="header-div">
        <h1 className="teknolojik-yemekler">Teknolojik Yemekler</h1>
        <p className="firsati-kacirma">Fırsatı kaçırma</p>
        <h2>KOD ACIKTIRIR PİZZA, DOYURUR</h2>
        <button className="button" onClick={handleClick}>
          <p>Acıktım</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
