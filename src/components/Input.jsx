export function Input({label, type, placeholder, ...props}){
    return(
        <div className="flex flex-col w-[300px] mb-2">
            <label className="mb-1 text-lg">{label}</label>
            <input type={type} placeholder={placeholder} {...props} className="border border-[var(--color-gray)] rounded-sm h-8 pl-2 mb-1 focus:outline-none focus:border-[var(--color-purple)]"/>
        </div>
    )
}