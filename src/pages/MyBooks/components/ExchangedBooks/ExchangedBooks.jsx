import url from "../../../../services/url";

export default function ExchangedBooks({image, title, author}){
    return(
        <div className="flex flex-col items-center w-[200px] bg-white border border-purple-tr rounded-md">
            <div className="w-[150px] h-[220px] mt-6">
                <img src={url + "/img/" + image} alt="Imagem do livro trocado" className="w-full h-full rounded-md object-cover"/>
            </div>

            <div className="w-[150px] mt-4">
                <hr className="text-purple"/>
                <h2 className="mt-2 text-lg font-medium">
                    {title.length > 14 ? `${title.substring(0, 13)}...` : title}
                </h2>
                <p className="text-sm mb-6">
                    {author}
                </p>
            </div>
        </div>
    )
}