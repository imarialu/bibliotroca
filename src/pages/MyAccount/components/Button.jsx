export default function Button({isActive, onClick, icon, text}){
    return(
        <button onClick={onClick} className={`flex items-center px-4 py-2 gap-2 cursor-pointer text-purple transition duration-600 ease hover:bg-purple-tr ${isActive ? "bg-purple-tr font-semibold" : "bg-transparent"}`}>
            {icon}
            {text}
        </button>
    )
}