import React from "react";
import "./orderContent.css";
import OrderExplanation from "../orderExplanation/orderExplanation";
import OrderForm from "../orderForm/OrderForm";

const asyncMockPizzaData = {
  name: "Position Absoulte Acı Pizza",
  price: 85,
  rating: 4.9,
  radius: 200,
  explanationofPruduct: `Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.`,
  boyut: ["Small", "Medium", "Large"],
  hamur: ["Kalın Hamur", "İnce Hamur"],
  ekMalzemeler: [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarmısak",
    "Biber",
    "Ananas",
    "Kabak",
  ],
};

const orderContent = ({ setter }) => {
  return (
    <div className="order-content-container">
      <OrderExplanation data={asyncMockPizzaData} />
      <OrderForm data={asyncMockPizzaData} setter={setter} />
    </div>
  );
};

export default orderContent;
