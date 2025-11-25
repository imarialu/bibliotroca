import BookCondition from "./BookCondition";
import { DetailsButton } from "./DetailsButton";

import url from "../services/url";

export function BookCard({image, condition, title, author, user, uuid}){
    return(
        <div className="flex w-[350px] h-[180px] p-3 gap-3 bg-white border rounded-md border-purple-tr transition duration-500 ease hover:shadow-cont">
            <div className="w-[120px] h-[155px]">
                <img src={url + "/img/" + image} alt="Capa do livro" className="w-full h-full rounded-md"/>
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
                    <DetailsButton uuid={uuid}/>
                    <hr className="text-purple-tr mt-2 mb-2"/>
                    <div className="flex gap-2 items-center">
                        <div className="rounded-full bg-gray w-[25px] h-[25px]">
                            <img src={url + "/img/" + user.icone} alt="Usuario icone" className="rounded-full h-full w-full" />
                        </div>
                        
                        <p className="text-sm">{user.nome.length > 25 ? `${user.nome.substring(0, 24)}...` : user.nome}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )

}