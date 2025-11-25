export default function BookCondition({text}){
    const colorsCondition = {
        novo: "text-green",
        seminovo: "text-blue",
        antigo: "text-orange"
    };

    const color = colorsCondition[text];

    const upperText = text[0].toUpperCase() + text.substring(1);

    return(
        <p className="text-sm font-semibold">
            <span className={color}>{upperText}</span>
        </p>
    )
}