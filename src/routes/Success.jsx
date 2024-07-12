import React from "react";
import { Footer } from "../components";
import TopBar from "../components/ui/TopBar";
import SuccessContent from "../components/succesPage/SuccessContent";

const Success = ({ state }) => {
  return (
    <div className="succes-route-container">
      <TopBar />
      <SuccessContent data={state} />
      <Footer />
    </div>
  );
};

export default Success;
