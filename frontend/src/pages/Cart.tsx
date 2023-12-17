import { Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import CartItemCard from "../components/CartItemCard";

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
            <CartItemCard key={index} item={item} short={false} />
          ))
        )}
      </Container>
    </>
  );
};

export default Cart;
