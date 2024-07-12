import React from "react";
import "./successContent.css";

const SuccessContent = (props) => {
  const { data } = props;
  return (
    <div className="success-content-container">
      <div className="successcontent-succes-page">
        <p className="firsati-kacirma">Fırsatı kaçırma</p>
        <h2>SİPARİŞ ALINDI</h2>
      </div>
      <div className="success-summary-container">
        <h4>{data.itemName}</h4>
        <p>Boyut: {data.boyut}</p>
        <p>
          Ekstralar:{" "}
          {data.extra.map((element, index) => (
            <span key={element}>
              {element}
              {index !== data.extra.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </div>
      <div className="success-siparis-toplamı-container">
        <h3>Sipariş Toplamı</h3>
        <p>Seçimler : {data.extra.length * 5}₺</p>
        <p>Toplam : {data.fiyat}₺</p>
      </div>
    </div>
  );
};

export default SuccessContent;
