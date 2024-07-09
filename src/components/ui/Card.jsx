import React from "react";

const card = (props) => {
  const { imgUrl, rating, price, name, radius } = props;
  return (
    <div className="item-card-container">
      <img className="item-card-img" src={imgUrl} alt={name} />
      <div className="item-card-content">
        <h5 className="item-card-name">{name}</h5>
        <div className="item-card-bottom-content">
          <p className="item-rating">{rating}</p>
          <div className="item-price-radius-container">
            <p className="item-radius">({radius})</p>
            <p className="item-price">{price}₺</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
