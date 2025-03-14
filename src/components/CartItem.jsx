import { Link } from "react-router-dom";

export const CartItem = ({ item, removeProduct }) => {
  return (
    <div
      className="w-64 bg-zinc-700 shadow-md rounded-lg p-4 flex flex-col items-center justify-center gap-y-4"
    >
      <img
        src={item.product.imageUrl}
        alt={item.product.name}
        className="w-full aspect-square object-cover rounded-xl"
      />
      <h3 className="font-bold text-[#0081a3]">{item.product.name}</h3>
      <p>${item.product.price}</p>
      <p>Cantidad: {item.amount}</p>
      <Link
        to={`/item/${item.product.id}`}
        className="text-sm text-white underline bg-zinc-100/20 rounded-xl p-2"
      >
        Ver detalles
      </Link>
      <button className="bg-red-800 hover:bg-red-900 focus:bg-red-900 active:bg-red-900 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200" onClick={() => removeProduct(item.product.id)}>
        Eliminar
      </button>
    </div>
  );
};
