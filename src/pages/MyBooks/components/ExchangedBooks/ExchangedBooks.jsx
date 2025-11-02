export default function ExchangedBooks({image, title, author}){
    return(
        <div className="flex flex-col items-center w-[200px] bg-white border border-purple-tr rounded-md">
            <div className="w-[150px] h-[220px] mt-6">
                <img src={image} alt="" className="w-full h-full rounded-md"/>
            </div>

            <div className="w-[150px] mt-4">
                <hr className="text-purple"/>
                <h2 className="mt-2 text-lg font-medium">
                    {title.length > 15 ? `${title.substring(0, 14)}...` : title}
                </h2>
                <p className="text-sm mb-6">
                    {author}
                </p>
            </div>
        </div>
    )
}