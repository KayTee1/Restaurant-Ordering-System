import React from "react";

const OrderMessage = ({ message }) => {
  const messageColor = message.includes("Successful")
    ? "green"
    : "red";

  return (
    <div>
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
};

export default OrderMessage;
