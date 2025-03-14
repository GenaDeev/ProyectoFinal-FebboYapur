import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartWidget = () => {
    const { totalItemAmount } = useContext(CartContext);

    return (
        <NavLink to="/cart" className="flex flex-col items-center justify-center p-1 rounded-xl bg-white/10 hover:scale-105 transition-transform duration-200">
            🛒
            <span className="font-semibold">{totalItemAmount()} item{totalItemAmount() === 1 ? "" : "s"}</span>
        </NavLink>
    )
}