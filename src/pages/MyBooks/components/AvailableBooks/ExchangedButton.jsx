export default function ExchangedButton({text}){
    return(
        <button className="px-6 py-1 rounded-full bg-purple-tr text-sm text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">
            {text}
        </button>
    )
}