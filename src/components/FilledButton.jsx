export default function FilledButton({type, onClick, text}){
    return (
        <button 
        type={type}
        onClick={onClick}
        className="py-1 px-8 rounded-full bg-purple text-white font-semibold cursor-pointer"
        >
            {text}
        </button>
    )
}