import NavLink from "./NavLink"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

export default function NavBar({ itemsInCart }) {
  return (
    <header className='fixed z-10 w-full flex items-center justify-between p-4 bg-zinc-900'>
      <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
        <img width={64} height={64} alt="Logo de ReactClothes" src="/reactclothes-logo.webp" />
        <strong className="text-[#0081a3]">ReactClothes</strong>
      </Link>
      <nav>
        <ul className="flex items-center gap-3">
          <NavLink content="Deportivo" href="/category/deportivo" />
          <NavLink content="Urbano" href="/category/urbano" />
          <NavLink content="Formal" href="/category/formal" />
          <NavLink content="Calzado" href="/category/calzado" />
          <NavLink content="Accesorios" href="/category/accesorios" />
          <CartWidget itemsInCart={itemsInCart} />
        </ul>
      </nav>
    </header>
  )
}