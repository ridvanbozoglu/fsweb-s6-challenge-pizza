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
      <h4>{data.itemName}</h4>
      <div className="success-summary-container">
        <p>Boyut: {data.boyut}</p>
        <p>Hamur: {data.hamur}</p>
        <p>
          Ekstralar:{"  "}
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
        <div>
          <p className="success-price">Seçimler </p>
          <p>{data.extra.length * 5}₺</p>
        </div>
        <div>
          <p className="success-price">Toplam </p>
          <p>{data.fiyat}₺</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessContent;
