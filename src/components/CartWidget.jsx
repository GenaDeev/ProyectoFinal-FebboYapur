import { NavLink } from "react-router-dom"

export default function CartWidget({ itemsInCart }) {
    return (
        <NavLink to="/cart" className="flex flex-col items-center justify-center p-1 rounded-xl bg-white/10 hover:scale-105 transition-transform duration-200">
            🛒
            <span className="font-semibold">{itemsInCart} items</span>
        </NavLink>
    )
}