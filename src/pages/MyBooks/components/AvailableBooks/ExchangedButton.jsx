export default function ExchangedButton({text}){
    return(
        <button className="px-6 py-1 rounded-full bg-[var(--color-transparent-purple)] text-sm text-[var(--color-purple)] font-semibold cursor-pointer transition duration-400 ease hover:bg-[var(--color-purple-hover)]">
            {text}
        </button>
    )
}