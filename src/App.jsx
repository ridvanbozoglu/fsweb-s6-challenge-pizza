import { Routes, Route } from "react-router-dom";
import { Home, OrderPizza, Success } from "./routes";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [acceptedOrder, setAcceptedOrder] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={<OrderPizza setter={setAcceptedOrder} />}
        />
        <Route path="/success" element={<Success state={acceptedOrder} />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
