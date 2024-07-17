import React, { useState, useEffect } from "react";
import {
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./orderForm.css";
import postOrder from "/src/api/axios.js";
import Seperator from "../../ui/Seperator";

const initialSelection = {
  custumerName: "",
  boyut: "Large",
  hamur: "Kalın Hamur",
  extra: [],
  not: "",
  adet: 1,
  fiyat: 0,
};

const errorMessages = {
  name: "İsim en az 3 karakter içermelidir!",
  extra: "4 ile 10 tane arası extra malzeme seçmelisiniz!",
};

const OrderForm = (props) => {
  const navigate = useNavigate();
  const { data, setter } = props;

  const [order, setOrder] = useState({
    itemName: data.name,
    ...initialSelection,
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, id } = e.target;

    setOrder((prevOrder) => {
      if (name === "extra") {
        const newExtras = prevOrder.extra.includes(value)
          ? prevOrder.extra.filter((item) => item !== value)
          : [...prevOrder.extra, value];
        return { ...prevOrder, extra: newExtras };
      } else if (type === "radio") {
        return {
          ...prevOrder,
          [name]: id,
        };
      } else {
        return {
          ...prevOrder,
          [name]: value,
        };
      }
    });
  };

  useEffect(() => {
    console.log(order);
  }, [order]);

  const handleAdetChange = (type) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      adet:
        type === "increment"
          ? prevOrder.adet + 1
          : Math.max(prevOrder.adet - 1, 1),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (order.custumerName.length < 3) {
      newErrors.name = errorMessages.name;
    }

    if (order.extra.length < 4 || order.extra.length > 10) {
      newErrors.extra = errorMessages.extra;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    const returnedData = await postOrder(order);
    setter(returnedData);
    navigate("/success");
  };

  useEffect(() => {
    setIsValid(validateForm());
    const calculatedPrice = (data.price + order.extra.length * 5) * order.adet;
    setOrder((prevOrder) => ({
      ...prevOrder,
      fiyat: calculatedPrice,
    }));
  }, [
    order.extra,
    order.adet,
    order.custumerName,
    data.price,
    data.not,
    data.boyut,
  ]);

  return (
    <div className="order-form-container">
      <div className="order-form-inner-container">
        <form onSubmit={handleSubmit}>
          <section>
            <div className="boyut-hamur-container">
              <div className="boyut-container">
                <h5 className="order-form-h5">Boyut Seç</h5>
                <fieldset className="radio-button-container">
                  {data.boyut.map((element) => (
                    <div key={element}>
                      <input
                        id={element}
                        name="boyut"
                        hidden
                        type="radio"
                        onChange={handleChange}
                        checked={order.boyut === element}
                      />
                      <label
                        htmlFor={element}
                        className={`radio-button ${
                          order.boyut === element && "active"
                        }`}
                      >
                        {element[0]}
                      </label>
                    </div>
                  ))}
                </fieldset>
              </div>
              <div className="hamur-container">
                <label htmlFor="exampleSelect">
                  <h5 className="order-form-h5">Hamur Seç</h5>
                </label>
                <select
                  id="exampleSelect"
                  name="hamur"
                  value={order.hamur}
                  onChange={handleChange}
                  className="drop-down-select"
                >
                  {data.hamur.map((element) => (
                    <option key={element} value={element}>
                      {element}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-extra-malzemeler">
              <h5 className="order-form-h5">Ekstra Malzemeler</h5>
              <p className="extra-malzeme-adet">
                En Fazla 10 malzeme seçebilirsiniz. 5₺
              </p>
              <div className="malzemeler-checkbox-container">
                {data.ekMalzemeler.map((element) => (
                  <label
                    htmlFor={element}
                    key={element}
                    className="malzemeler-container"
                  >
                    <div
                      className={`extra-checkbox ${
                        order.extra.includes(element) ? "checked" : ""
                      }`}
                    >
                      ✔
                    </div>
                    {element}
                    <input
                      type="checkbox"
                      id={element}
                      name="extra"
                      className="form-option"
                      value={element}
                      onChange={handleChange}
                      checked={order.extra.includes(element)}
                      hidden
                    />
                  </label>
                ))}
              </div>

              {errors.extra && <p className="d-block-extra">{errors.extra}</p>}
            </div>
          </section>
          <div className="ad-not-container">
            <div className="isim-container">
              <label htmlFor="exampleAd">Ad Soyad</label>
              <input
                id="exampleAd"
                placeholder="Ad Soyad"
                name="custumerName"
                type="text"
                value={order.custumerName}
                onChange={handleChange}
              />
              {errors.name && <p className="d-block-name">{errors.name}</p>}
            </div>
            <div className="not-container">
              <label htmlFor="exampleText">Sipariş Notu</label>
              <input
                id="exampleText"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                name="not"
                type="textarea"
                value={order.not}
                onChange={handleChange}
              />
            </div>
          </div>
          <Seperator />
          <div className="finish-order">
            <div className="adet-container">
              <button
                className="adet"
                onClick={() => handleAdetChange("decrement")}
                color="primary"
                disabled={order.adet <= 1}
              >
                -
              </button>
              <div className="adet-text">{order.adet}</div>
              <button
                className="adet"
                onClick={() => handleAdetChange("increment")}
                color="primary"
              >
                +
              </button>
            </div>
            <div className="order-summary">
              <div className="fiyat-seçimler-gosterim-container">
                <h3>Sipariş Toplamı</h3>
                <p>
                  <p>Seçimler :</p> <p> {order.extra.length * 5}₺</p>
                </p>
                <p>
                  <p style={{ color: "red" }}>Toplam :</p>{" "}
                  <p style={{ color: "red" }}>{order.fiyat}₺</p>
                </p>
              </div>
              <button className="submit-button" disabled={!isValid}>
                <p>{!isValid ? "Disabled" : "Submit"}</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
