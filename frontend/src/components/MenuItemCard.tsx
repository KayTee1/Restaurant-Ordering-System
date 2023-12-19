import { useState, useCallback, useEffect } from "react";
import axios from "axios";

import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

import { useCart } from "../context/CartContext";

import Dish from "../types/Dish";
import { baseApiUrl } from "../utilities/baseApiUrl";

type MenuItemCardProps = {
  dish: Dish;
};

const MenuItemCard: React.FC<MenuItemCardProps> = ({ dish }) => {
  const { addToCart } = useCart();
  const { name, price, description, image } = dish;

  const [img, setImg] = useState<string | undefined>();

  const handleAddToCart = () => {
    dish.quantity = 1;
    addToCart(dish);
  };

  const fetchImage = useCallback(async () => {
    try {
      const response = await axios.get(baseApiUrl + image, {
        responseType: "arraybuffer",
      });

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const imageUrl = URL.createObjectURL(blob);
      setImg(imageUrl);
    } catch (err) {
      console.error(err);
    }
  }, [image]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={img}
        height="360px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">
            {formatCurrency(parseFloat(price))}
          </span>
        </Card.Title>
        <Card.Text className="m-auto">
          <span>{description}</span>
        </Card.Text>
        <Button className="mt-3" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MenuItemCard;
