import { PageLayout } from "../layouts/PageLayout";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { sendOrderToDb } from "../config/firebase";
import { Thanks } from "./";

export const CheckoutPage = () => {
  document.title = "Checkout - ReactClothes";
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { totalPrice, totalItemAmount, cart } = useContext(CartContext);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const order = {
      buyer: { name, email, phone },
      total: totalPrice(),
      items: cart.map((item) => ({ id: item.product.id, name: item.product.name, price: item.product.price, amount: item.amount })),
    }
    setOrderId(await sendOrderToDb(order));
    setLoading(false);
  };

  return (
    <PageLayout title="Checkout" className="items-center flex flex-col">
      {!orderId ? (
        <>
          {cart && cart.length > 0 ? (
            <>
              <div className="flex flex-col items-center">
                Estas comprando:
                <ul>
                  {cart.map((item, index) => (
                    <li key={"item-" + index}>
                      <span className="opacity-50">{item.amount} x</span>{" "}
                      <strong>{item.product.name}</strong>
                    </li>
                  ))}
                </ul>
                <p>
                  Total:{" "}
                  <span className="font-bold text-green-500">
                    ${totalPrice()}
                  </span>
                </p>
                <p>
                  Total de productos:{" "}
                  <span className="font-bold text-green-500">
                    {totalItemAmount()}
                  </span>
                </p>
              </div>
              <form
                className="bg-zinc-800 max-w-md w-full flex flex-col gap-4 p-4 rounded-lg mt-12"
                onSubmit={handleSubmit}
              >
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  className="border rounded-lg placeholder:text-white/70 p-2"
                  placeholder="Juan Perez"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className="border rounded-lg placeholder:text-white/70 p-2"
                  placeholder="juanperez@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="phone">Numero de telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  className="border rounded-lg placeholder:text-white/70 p-2"
                  placeholder="+5491128335474"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="transition-colors duration-200 bg-zinc-700 hover:bg-zinc-600 focus:bg-zinc-600 active:bg-zinc-600 rounded-xl p-1"
                >
                  Confirmar compra por{" "}
                  <strong className="text-green-500">${totalPrice()}</strong>
                </button>
              </form>
              <div>{loading && <p>Procesando tu compra...</p>}</div>
            </>
          ) : (
            <p>Tu carrito está vacío</p>
          )}
        </>
      ):
        <Thanks orderId={orderId} />
      }
    </PageLayout>
  );
};
