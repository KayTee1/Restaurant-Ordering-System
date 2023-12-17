import { Card, Row, Col } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

import QuantityHandlerIcons from "./QuantityHandlerIcons";

import Dish from "../types/Dish";

type TCartItemCard = {
  item: Dish;
  short: Boolean;
};
const CartItemCard: React.FC<TCartItemCard> = ({
  item,
  short,
}: TCartItemCard) => {
    
  const { name, price, description, quantity } = item;

  return (
    <>
      <Card className="h-100 m-2">
        <Card.Body>
          {short ? (
            <>
              <Card.Title className="mb-4">
                <Row className="align-items-baseline ">
                  <Col>
                    <span className="fs-2">{name}</span>
                  </Col>
                  <Col>
                    <QuantityHandlerIcons item={item} />
                  </Col>
                  <Col style={{ textAlign: "right" }} className="me-4">
                    <span className="text-muted ">
                      {formatCurrency(price * quantity)}
                    </span>
                  </Col>
                </Row>
              </Card.Title>
            </>
          ) : (
            <>
              <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">
                  {formatCurrency(price * quantity)}
                </span>
              </Card.Title>
              <span>{description}</span>

              <QuantityHandlerIcons item={item} />
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default CartItemCard;
