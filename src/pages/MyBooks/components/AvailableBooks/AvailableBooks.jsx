import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

import ExchangedButton from './ExchangedButton';
 
 export default function AvailableBooks({image, status, title, author}){
    return(
        <>
            <div className="flex w-[350px] h-[180px] p-3 gap-2 border-1 rounded-md border-[var(--color-transparent-purple)]">
                <div className="w-[120px] h-[155px]">
                    <img src={image} alt="Capa do livro" className="w-full h-full rounded-md"/>
                </div>

                <div className="flex flex-col justify-between w-[250px]">
                    <div>
                        <p className="text-sm font-semibold">{status}</p>
                        <h2 className="text-base font-medium">{title.length > 24 ? `${title.substring(0, 25)}...` : title}</h2>
                        <p className="text-sm">{author}</p>
                    </div>

                    <div className="items-center mt-2">
                        <hr className="text-[var(--color-transparent-purple)] mb-2"/>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                <button className="flex items-center p-1 border-1 border-[var(--color-purple)] rounded-full text-[var(--color-purple)] transition duration-400 ease hover:bg-[var(--color-transparent-purple)] cursor-pointer">
                                    <MdEdit className="text-2xl"/>
                                </button>
                                <button className="flex items-center p-1 border-1 border-[var(--color-purple)] rounded-full text-[var(--color-purple)] transition duration-400 ease hover:bg-[var(--color-transparent-purple)] cursor-pointer">
                                    <MdDelete className="text-2xl"/>
                                </button>
                            </div>

                            <div>
                                <ExchangedButton text={"Trocado"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 }