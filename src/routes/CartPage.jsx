import { PageLayout } from "../layouts/PageLayout";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../components";

export const CartPage = () => {
  document.title = "Mi carrito - ReactClothes";
  const { cart, totalPrice, totalItemAmount, emptyCart, removeProduct } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <PageLayout title="Mi carrito" className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">
          Tu carrito está vacío
        </h3>
        <Link
          to="/"
          className="text-sm text-white underline bg-zinc-100/20 rounded-xl p-2"
        >
          Volver al inicio
        </Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Mi carrito">
      <div className="flex gap-2 items-center justify-center flex-wrap p-2">
        {cart.map((item, index) => (
          <CartItem key={"item-" + index} item={item} removeProduct={removeProduct} />
        ))}
      </div>
      <div className="mt-4 text-white">
        <p>Total de productos: {totalItemAmount()}</p>
        <p>Total a pagar: ${totalPrice()}</p>
        <div className="flex gap-2 items-center justify-center flex-wrap p-2">
          <button
            onClick={emptyCart}
            className="bg-red-800 hover:bg-red-900 focus:bg-red-900 active:bg-red-900 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Vaciar carrito
          </button>
          <Link
            to="/checkout"
            className="bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};
