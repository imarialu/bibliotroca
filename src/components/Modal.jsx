export default function Modal({isOpen, onClose, children}){
    if(!isOpen) return null;

    return(
        <div className="fixed flex items-center justify-center inset-0 z-1000 bg-black/20">
            <div className="relative flex flex-col items-center text-center max-w-[80vw] w-full bg-white opacity-100 rounded-md py-10 px-6 gap-5 sm:max-w-[500px] sm:w-full">
                <button onClick={onClose} className="absolute top-2 right-4 text-gray-300 text-lg hover:text-purple">X</button>
                {children}
            </div>
        </div>
    )
}