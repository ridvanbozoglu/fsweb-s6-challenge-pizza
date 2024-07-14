import React, { useEffect } from "react";
import { Footer } from "../components";
import TopBar from "../components/ui/TopBar";
import SuccessContent from "../components/succesPage/SuccessContent";
import { useNavigate } from "react-router-dom";

const Success = ({ state }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/order");
    }
  }, [state]);

  return (
    <div className="succes-route-container">
      <TopBar />
      {state && <SuccessContent data={state} />}
      <Footer />
    </div>
  );
};

export default Success;
