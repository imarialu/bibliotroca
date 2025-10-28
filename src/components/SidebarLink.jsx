import { NavLink } from "react-router-dom";

export function SidebarLink({url, icon, text}){
    return(
        <li className="flex items-center">
            <NavLink to={url} className="flex flex-col items-center gap-1 p-2 rounded-lg text-[var(--color-darkpurple)] transition duration-500 ease hover:text-white hover:bg-[var(--color-transparent-darkpurple)]">
                {icon}
            </NavLink>
        </li>
    )
}