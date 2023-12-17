import React, { useState, useCallback } from "react";
import axios from "axios";
import { Button, Form, Row, Col, Card } from "react-bootstrap";

import { useCart } from "../context/CartContext";
import OrderMessage from "./OrderMessage";
import CartItemCard from "./CartItemCard";

const OrderForm = ({ resetFireworks, setFireworksOpacity }) => {
  const { cartState } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    postalCode: "",
    city: "",
    isVerified: false,
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartState.items.length == 0) {
      setMessage("Your Cart is Empty!");
      return;
    }

    const { name, email, street, postalCode, city } = formData;
    if (
      name == "" ||
      email == "" ||
      street == "" ||
      postalCode == "" ||
      city == ""
    ) {
      setMessage("Missing details!");
      return;
    }

    if (!formData.isVerified) {
      setMessage("Please verify your details!");
      return;
    }

    sendOrder(formData);
  };

  const sendOrder = useCallback(async (formData) => {
    try {
      const items = cartState.items;
      const orderData = {
        order: {
          customer: formData,
          items,
        },
      };

      const orderUrl = "http://localhost:5000/api/orders";
      const res = await axios.post(orderUrl, orderData);
      console.log(res);

      setMessage("Order Successful!");

      setFireworksOpacity(1);
      resetFireworks();
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group className="mb-3" controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter street address"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter postal code"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="items">
            <Form.Label>Cart Items</Form.Label>
            <Card>
              <Card.Body
                className="d-flex flex-column overflow-y-auto"
                style={{ maxHeight: "280px" }}
              >
                {cartState.items.length > 0 ? (
                  <>
                    {cartState.items.map((item, index) => (
                      <CartItemCard key={index} item={item} short={true} />
                    ))}
                  </>
                ) : (
                  <p>Your Cart is Empty!</p>
                )}
              </Card.Body>
            </Card>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="isVerified">
        <Form.Check
          type="checkbox"
          label="I have verified that the information provided is correct."
          onChange={handleChange}
        />
      </Form.Group>

      <OrderMessage message={message} />

      <Button variant="primary" type="submit">
        Send Order
      </Button>
    </Form>
  );
};

export default OrderForm;
