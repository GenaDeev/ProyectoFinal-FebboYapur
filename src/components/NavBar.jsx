import NavLink from "./NavLink"
import CartWidget from "./CartWidget"

export default function NavBar({ itemsInCart }) {
  return (
    <section className="w-full flex items-center justify-between p-4 bg-zinc-900">
      <a href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
        <img width={64} height={64} alt="Logo de ReactClothes" src="/reactclothes-logo.webp" />
        <strong className="text-[#0081a3]">ReactClothes</strong>
      </a>
      <nav>
        <ul className="flex items-center gap-3">
          <NavLink content="Deportivo" href="/categorias/deportivo" />
          <NavLink content="Urbano" href="/categorias/urbano" />
          <NavLink content="Formal" href="/categorias/formal" />
          <NavLink content="Calzado" href="/categorias/calzado" />
          <NavLink content="Accesorios" href="/categorias/accesorios" />
          <CartWidget itemsInCart={itemsInCart} />
        </ul>
      </nav>
    </section>
  )
}