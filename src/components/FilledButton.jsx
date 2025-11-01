export default function FilledButton({onClick, text}){
    return (
        <button 
        className="py-1 px-8 rounded-full bg-purple text-white font-semibold cursor-pointer"
        onClick={onClick}>
            {text}
        </button>
    )
}