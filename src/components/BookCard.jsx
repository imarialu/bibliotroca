import { DetailsButton } from "./DetailsButton"

export function BookCard({imgBook, status, title, author, imgUser, nameUser}){
    return(
        <div className="flex w-[350px] h-[180px] p-3 gap-2 border-1 rounded-md border-[var(--color-transparent-purple)] transition duration-500 ease hover:shadow-[0px_0px_5px_2px_rgba(198,_174,_230,_0.4)]">
            <div className="w-[120px] rounded-md bg-[var(--color-gray)]">
                <img src={imgBook} alt="" className="w-full"/>
            </div>

            <div className="w-[250px]">
                <p className="text-sm font-semibold">{status}</p>
                <h2 className="text-base font-medium">{title.length > 24 ? `${title.substring(0, 25)}...` : title}</h2>
                <p className="text-sm">{author}</p>

                <DetailsButton/>
                <hr className="text-[var(--color-transparent-purple)]"/>
                <div className="flex gap-2 items-center mt-2">
                    <div className="rounded-full bg-[var(--color-gray)] w-[25px] h-[25px]">
                        <img src={imgUser} alt="" />
                    </div>
                    
                    <p className="text-sm">{nameUser}</p>
                </div>
            </div>
        </div>
    )

}