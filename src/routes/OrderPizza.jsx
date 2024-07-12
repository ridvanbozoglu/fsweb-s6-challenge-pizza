import React from "react";
import { Footer, OrderContent } from "../components";
import TopBar from "../components/ui/TopBar";

const OrderPizza = ({ setter }) => {
  return (
    <div>
      <TopBar />
      <OrderContent setter={setter} />
      <Footer />
    </div>
  );
};

export default OrderPizza;
