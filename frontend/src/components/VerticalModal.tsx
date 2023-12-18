import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import Dish from "../types/Dish";

type VerticalModalProps = {
  name: string;
  onHide: () => void;
  item: Dish;
  show: boolean;
};

const VerticalModal: React.FC<VerticalModalProps> = ({ name, onHide, item, show }) => {
  const { removeFromCart } = useCart();

  const handleConfirm = () => {
    removeFromCart(item);
    onHide();
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>Remove {name} from Cart?</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <Button onClick={handleConfirm}>Confirm</Button>
          <Button onClick={onHide}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VerticalModal;
