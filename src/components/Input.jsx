export function Input({label, type, placeholder, ...props}){
    return(
        <div className="flex flex-col mb-1">
            <label className="mb-1 text-lg">{label}</label>
            <input type={type} placeholder={placeholder} {...props} className="border border-gray rounded-sm h-8 pl-2 mb-1 shadow-xs focus:outline-none focus:border-purple"/>
        </div>
    )
}