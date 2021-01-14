import React from "react";

const TestHeader = (props) => {
  return (
    <header className="text-center">
      <img
        className="img-fluid my-4"
        src="https://juit.io/assets/images/lp/logo-juit-rimor.png"
        alt="JUIT logo"
      />
      <h2 className="my-2">Teste Juit {props.testType} </h2>
    </header>
  );
};

export default TestHeader;
