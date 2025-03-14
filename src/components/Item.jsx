import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const Item = ({ item }) => {
  const { addProduct, cart } = useContext(CartContext);
  const [amountAdded, setAmountAdded] = useState(0);
  const { id, name, price, stock, imageUrl, categoryId } = item;

  const onAmountChange = (amount) => {
    setAmountAdded(amount);
  };

  const inCart = cart.filter((e) => e.product.id === id)[0]?.amount ?? 0;

  const handleAddToCart = () => {
    const finalItem = {
      id,
      name,
      price,
      categoryId,
      imageUrl,
    };
    addProduct(finalItem, amountAdded);
    setAmountAdded(0);
  };


  return (
    <div
      key={id}
      className="w-full max-w-64 bg-zinc-700 shadow-md rounded-lg p-4 flex flex-col items-center justify-center gap-y-4"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto max-h-72 aspect-square object-cover rounded-xl"
      />
      <h3 className="font-bold text-[#0081a3]">{name}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`} className="text-sm text-[#0081a3] underline">
        Ver detalles
      </Link>
      <ItemCount
        stock={stock}
        initial={0}
        onAmountChange={onAmountChange}
        inCart={inCart}
        globalAmountAdded={amountAdded}
      />
      <button
        disabled={amountAdded === 0}
        onClick={handleAddToCart}
        className={`${
          amountAdded === 0
            ? "bg-zinc-500 hover:bg-zinc-600 focus:bg-zinc-600 active:bg-zinc-600"
            : "bg-[#0081a3] focus:bg-[#5ca3b7] active:bg-[#5ca3b7]"
        } text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200`}
      >
        Agregar al carrito
      </button>
      <p className={`${inCart===stock || stock === 0 ? 'text-red-700': ''}`}>{inCart === stock || stock === 0 ? "No hay más stock" : "En stock: " + (stock - inCart)}</p>
    </div>
  );
};
