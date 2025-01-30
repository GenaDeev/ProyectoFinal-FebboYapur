export default function NavLink({ content, href }) {
    return (
        <li>
            <a
                className="hover:text-[#0081a3] hover:bg-white/10 rounded-xl transition-colors duration-200 p-2"
                href={href}>
                {content}
            </a>
        </li>
    )
}