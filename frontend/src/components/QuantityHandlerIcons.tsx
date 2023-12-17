import React, { useState } from "react";

import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import VerticalModal from "./VerticalModal";

const QuantityHandlerIcons = ({ item }) => {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [modalShow, setModalShow] = useState(false);

  const { name, quantity } = item;

  const incrementCount = () => {
    incrementQuantity(item);
  };

  const decrementCount = () => {
    if (quantity > 1) {
      decrementQuantity(item);
    } else {
      setModalShow(true);
    }
  };

  const handleRemoveItem = () => {
    removeFromCart(item);
    setModalShow(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-3">
      <IoMdAdd
        className="m-1 "
        style={{ cursor: "pointer", fontSize: "30px" }}
        onClick={incrementCount}
      />
      <span style={{ fontSize: "30px" }}>{quantity}</span>
      <IoMdRemove
        className="m-1 "
        style={{ cursor: "pointer", fontSize: "30px" }}
        onClick={decrementCount}
      />
      <FaRegTrashAlt
        className="m-1 "
        style={{ cursor: "pointer", fontSize: "30px" }}
        onClick={handleRemoveItem}
      />

      <VerticalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={name}
        item={item}
      />
    </div>
  );
};

export default QuantityHandlerIcons;
