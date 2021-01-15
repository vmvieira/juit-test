import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import TestHeader from "./TestHeader";

const Homepage = () => {
  return (
    <div className="text-center">
      <TestHeader testType="React" />

      <Link to="/users-table">
        <Button variant="outline-dark" className="my-5 ">
          Ir para o App
        </Button>
      </Link>
    </div>
  );
};

export default Homepage;
