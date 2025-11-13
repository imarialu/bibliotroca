export default function ExchangedButton({onClick, text}){
    return(
        <button onClick={onClick} className="px-6 py-1 rounded-full bg-purple-tr text-sm text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">
            {text}
        </button>
    )
}