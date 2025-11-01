export default function GhostButton({isActive, onClick, icon, text}){
    return(
        <button onClick={onClick} className={`flex py-1 px-6 gap-2 rounded-full font-semibold border border-purple text-purple transition duration-400 ease hover:bg-purple-tr ${isActive ? "bg-purple-tr" : "bg-transparent"}`}>
            {icon} {text}
        </button>
    )
}