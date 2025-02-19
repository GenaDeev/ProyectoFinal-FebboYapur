import { Link } from "react-router-dom";

export default function Item({ item }) {
    return (
        <div key={item.id} className="w-full max-w-sm bg-zinc-700 shadow-md rounded-lg p-4 flex flex-col items-center justify-center gap-y-4">
            <img src={item.imageUrl} alt={item.name} className="w-full h-auto max-h-72 object-cover rounded-xl" />
            <h3 className="font-bold text-[#0081a3]">{item.name}</h3>
            <p>${item.price}</p>
            <Link to={`/item/${item.id}`} className="text-sm text-[#0081a3] underline">Ver detalles</Link>
            <button disabled className="bg-[#0081a3] text-white font-bold py-2 px-4 rounded-lg">Comprar (Proximamente)</button>
        </div>
    )
}