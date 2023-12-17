import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return { ...state, items: updatedItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: updatedItems };

    case "INCREMENT_QUANTITY":
      const incrementedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, items: incrementedItems };

    case "DECREMENT_QUANTITY":
      const decrementedItems = state.items.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, items: decrementedItems };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const incrementQuantity = (item) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: item });
  };

  const decrementQuantity = (item) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export { CartProvider, useCart };
