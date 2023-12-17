import React, { useState, useRef } from "react";

import { Fireworks } from "@fireworks-js/react";
import { Container } from "react-bootstrap";

import OrderForm from "../components/OrderForm";

const Checkout = () => {
  const [fireworksOpacity, setFireworksOpacity] = useState(0);
  const ref = useRef(null);

  const resetFireworks = () => {
    if (!ref.current) return;
    ref.current.clear();
  };

  return (
    <>
      <h1>Checkout</h1>
      <div
        style={{
          display: "flex",
          gap: "4px",
          position: "absolute",
          zIndex: -1,
          opacity: fireworksOpacity,
        }}
      >
        <Fireworks
          ref={ref}
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            background: "#000",
            traceSpeed: 2,
            backgroundColor: "white",
          }}
        />
      </div>

      <Container className="mt-4">
        <OrderForm
          resetFireworks={resetFireworks}
          setFireworksOpacity={setFireworksOpacity}
        />
      </Container>
    </>
  );
};

export default Checkout;
