import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const VerticalModal = (props) => {
  const { name, onHide, item } = props;
  const { removeFromCart } = useCart();

  const handleConfirm = () => {
    removeFromCart(item);
    onHide();
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
