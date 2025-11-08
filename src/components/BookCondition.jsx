export default function BookCondition({text}){
    const colorsCondition = {
        Novo: "text-green",
        Seminovo: "text-blue",
        Antigo: "text-orange"
    };

    const color = colorsCondition[text];

    return(
        <p className="text-sm font-semibold">
            <span className={color}>{text}</span>
        </p>
    )
}