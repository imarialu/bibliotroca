import { DetailsButton } from "./DetailsButton"

export function BookCard({image, status, title, author, imgUser, nameUser}){
    return(
        <div className="flex w-[350px] h-[180px] p-3 gap-2 border rounded-md border-purple-tr transition duration-500 ease hover:shadow-cont">
            <div className="w-[120px] h-[155px]">
                <img src={image} alt="Capa do livro" className="w-full h-full rounded-md"/>
            </div>

            <div className="w-[250px]">
                <p className="text-sm font-semibold">{status}</p>
                <h2 className="text-base font-medium">
                    {title.length > 26 ? `${title.substring(0, 25)}...` : title}
                </h2>
                <p className="text-sm">{author}</p>

                <DetailsButton/>
                <hr className="text-purple-tr"/>
                <div className="flex gap-2 items-center mt-2">
                    <div className="rounded-full bg-gray w-[25px] h-[25px]">
                        <img src={imgUser} alt="" />
                    </div>
                    
                    <p className="text-sm">{nameUser}</p>
                </div>
            </div>
        </div>
    )

}