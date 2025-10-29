export default function Button({isActive, onClick, icon, text}){
    return(
        <button onClick={onClick} className={`flex py-1 px-6 gap-2 rounded-full font-semibold border-1 border-[var(--color-purple)] text-[var(--color-purple)] transition duration-400 ease hover:bg-[var(--color-transparent-purple)] ${isActive ? "bg-[var(--color-transparent-purple)]" : "bg-transparent"}`}>
            {icon} {text}
        </button>
    )
}