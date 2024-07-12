import React, { useState, useEffect } from "react";
import {
  Form,
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
    const { name, value } = e.target;
    if (name === "extra") {
      setOrder((prevOrder) => {
        const newExtras = prevOrder.extra.includes(value)
          ? prevOrder.extra.filter((item) => item !== value)
          : [...prevOrder.extra, value];
        return { ...prevOrder, extra: newExtras };
      });
    } else {
      setOrder({
        ...order,
        [name]: value,
      });
    }
  };

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
  }, [order.extra, order.adet, order.custumerName, data.price]);

  return (
    <div className="order-form-container">
      <div className="order-form-inner-container">
        <Form onSubmit={handleSubmit}>
          <section>
            <h5>Boyut Seç</h5>
            <ButtonGroup>
              {data.boyut.map((element) => (
                <Button
                  color="primary"
                  key={element}
                  name="boyut"
                  value={element}
                  outline
                  onClick={handleChange}
                  active={order.boyut === element}
                >
                  {element}
                </Button>
              ))}
            </ButtonGroup>
            <FormGroup>
              <Label for="exampleSelect">Hamur Seç</Label>
              <Input
                id="exampleSelect"
                name="hamur"
                type="select"
                value={order.hamur}
                onChange={handleChange}
              >
                {data.hamur.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <h5>Ekstra Malzemeler</h5>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <ButtonGroup className="order-form-checkbox">
              {data.ekMalzemeler.map((element) => (
                <Button
                  key={element}
                  color="primary"
                  name="extra"
                  type="button"
                  value={element}
                  onClick={handleChange}
                  active={order.extra.includes(element)}
                >
                  {element}
                </Button>
              ))}
            </ButtonGroup>
            {errors.extra && (
              <FormFeedback className="d-block">{errors.extra}</FormFeedback>
            )}
          </section>
          <FormGroup>
            <Label for="exampleAd">Ad Soyad</Label>
            <Input
              id="exampleAd"
              placeholder="Ad Soyad"
              name="custumerName"
              type="text"
              value={order.custumerName}
              onChange={handleChange}
              invalid={!!errors.name}
            />
            {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Not</Label>
            <Input
              id="exampleText"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              name="not"
              type="textarea"
              value={order.not}
              onChange={handleChange}
            />
          </FormGroup>
          <div className="finish-order">
            <div className="adet-container">
              <Button
                className="adet"
                onClick={() => handleAdetChange("decrement")}
                color="primary"
                disabled={order.adet <= 1}
              >
                -
              </Button>
              <div className="adet">{order.adet}</div>
              <Button
                className="adet"
                onClick={() => handleAdetChange("increment")}
                color="primary"
              >
                +
              </Button>
            </div>
            <div className="order-summary">
              <h3>Sipariş Toplamı</h3>
              <p>Seçimler : {order.extra.length * 5}₺</p>
              <p>Toplam : {order.fiyat}₺</p>
            </div>
            <Button className="submit-button" disabled={!isValid}>
              {!isValid ? "Disabled" : "Submit"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default OrderForm;
