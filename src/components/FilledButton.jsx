import { cva } from "class-variance-authority";

const button = cva("items-center rounded-full font-semibold cursor-pointer", {
    variants: {
        variant: {
            primary: "bg-[var(--color-purple)] text-white",
            secondary: "bg-[var(--color-transparent-purple)] text-[var(--color-purple)] hover:bg-[var(--color-purple-hover)]",
        },
        size: {
            lg: "h-8 px-8",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "lg",
    },
});

export default function FilledButton({onClick, text}){
    return (
        <button 
        className="py-1 px-8 rounded-full bg-[var(--color-purple)] text-white font-semibold cursor-pointer"
        onClick={onClick}>
            {text}
        </button>
    )
}