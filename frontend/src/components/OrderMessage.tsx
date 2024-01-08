import React from "react";

type OrderMessageProps = {
  message: string;
};

const OrderMessage: React.FC<OrderMessageProps> = ({ message }) => {
  const messageColor = message.includes("Successful") ? "green" : "red";

  return (
    <div>
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
};

export default OrderMessage;
