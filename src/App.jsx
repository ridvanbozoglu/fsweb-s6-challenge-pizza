import { Routes, Route } from "react-router-dom";
import { Home, OrderPizza, Success } from "./routes";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<OrderPizza />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
