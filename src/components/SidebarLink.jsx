export function SidebarLink({url, icon, text}){
    return(
        <li>
            <a href="#" className="flex flex-col items-center gap-1 transition duration-500 ease hover:text-[var(--color-darkpurple)]">
                {icon}
                <p className="text-sm font-medium">{text}</p>
            </a>
        </li>
    )
}