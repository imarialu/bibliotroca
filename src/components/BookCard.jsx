import BookCondition from "./BookCondition"
import { DetailsButton } from "./DetailsButton"

export function BookCard({image, condition, title, author, imgUser, nameUser}){
    return(
        <div className="flex w-[350px] h-[180px] p-3 gap-2 bg-white border rounded-md border-purple-tr transition duration-500 ease hover:shadow-cont">
            <div className="w-[120px] h-[155px]">
                <img src={image} alt="Capa do livro" className="w-full h-full rounded-md"/>
            </div>

            <div className="flex flex-col justify-between w-[250px]">
                <div>
                    <BookCondition text={condition}/>
                    <h2 className="font-medium">
                        {title.length > 24 ? `${title.substring(0, 23)}...` : title}
                    </h2>
                    <p className="text-sm">{author}</p>
                </div>

                <div>
                    <DetailsButton/>
                    <hr className="text-purple-tr mt-2 mb-2"/>
                    <div className="flex gap-2 items-center">
                        <div className="rounded-full bg-gray w-[25px] h-[25px]">
                            <img src={imgUser} alt="" />
                        </div>
                        
                        <p className="text-sm">{nameUser}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )

}