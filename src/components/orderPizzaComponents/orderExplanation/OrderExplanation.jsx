import React from "react";
import "./orderExplanation.css";

const OrderExplanation = (props) => {
  const { data } = props;

  return (
    <div className="order-explanation-container">
      <div className="order-explanation-inner-container">
        <img
          src="public/assets/iteration-2/pictures/form-banner.png"
          alt="half pizza"
        />
        <div>
          <div>
            <p className="order-anasayfa-siparis-nav">
              Anasayfa - <span>Sipariş Oluştur</span>
            </p>
            <h5 className="item-card-name">{data.name}</h5>
            <div className="explanation-price-rating">
              <p className="order-price">{data.price}₺</p>
              <div className="explanation-radius-rating">
                <p>{data.rating}</p>
                <p>({data.radius})</p>
              </div>
            </div>
            <p className="order-explanation">{data.explanationofPruduct}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderExplanation;
