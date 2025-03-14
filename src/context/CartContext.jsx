import { createContext, useState, useEffect } from "react";

const productInCart = (cart, id) => {
  return cart.some((e) => e.product.id === id);
};

export const CartContext = createContext({
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  });

  const addProduct = (product, amount) => {
    if (!productInCart(cart, product.id)) {
      setCart((prev) => [...prev, { product, amount }]);
    } else {
      setCart((prev) => {
        return prev.map((item) => {
          return item.product.id === product.id
            ? { ...item, amount: item.amount + amount }
            : item;
        });
      });
    }
  };

  const removeProduct = (id) => {
    const filteredCart = cart.filter((item) => item.product.id !== id);
    setCart(filteredCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalPrice = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.amount * item.product.price;
    }, 0);
    return total.toFixed(2);
  };

  const totalItemAmount = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    return total;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        emptyCart,
        totalPrice,
        totalItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
