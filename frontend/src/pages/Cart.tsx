import { Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import CartItemCard from "../components/CartItemCard";
import Dish from "../types/Dish";

const Cart = () => {
  const { cartState } = useCart();

  return (
    <>
      <Container>
        <h1 className="mb-5">Cart</h1>
        {cartState.items.length === 0 ? (
          <p className="fs-4">Add some items from the Menu first!</p>
        ) : (
          cartState.items.map((item, index: number) => (
            <CartItemCard key={index} item={item as Dish} short={false} />
          ))
        )}
      </Container>
    </>
  );
};

export default Cart;
