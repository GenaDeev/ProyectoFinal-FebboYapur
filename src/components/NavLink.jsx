import { NavLink } from "react-router-dom"

export const NavLinkComponent = ({ content, href }) => {
    return (
        <li>
            <NavLink
                className="hover:text-[#0081a3] hover:bg-white/10 rounded-xl transition-colors duration-200 p-2"
                to={href}>
                {content}
            </NavLink>
        </li>
    )
}