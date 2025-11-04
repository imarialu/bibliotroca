import { useNavigate } from "react-router-dom";

import { BsArrowLeftShort } from 'react-icons/bs';

import books from "../../data/books";
import MainLayout from "../../layouts/MainLayout";
import FilledButton from "../../components/FilledButton";

export default function BookDetails(){
    const navigate = useNavigate()

    return(
        <>
            <MainLayout>
                <div className="ml-20 w-[1100px]">   
                    <button 
                    onClick={() => navigate(-1)} 
                    className="flex mt-10 mb-8 gap-1 py-1 px-3 border border-purple-tr rounded-md text-purple transition duration-400 ease hover:border-purple">
                        <BsArrowLeftShort className="text-2xl"/>
                        Voltar
                    </button>
                </div>

                <section className="ml-20 w-[1100px]">
                    <div className="p-10 bg-white rounded-sm shadow-cont">
                        <div className="grid grid-cols-3">
                            <div className="col-span-1 flex">
                                <div className="col-span-1 w-[250px] h-[350px] mr-12">
                                    <img src={books[0].image} alt="" className="w-full h-full rounded-md"/>
                                </div>

                                <div className="w-[1px] h-[100%] bg-purple"/>
                            </div>

                            <div className="flex flex-col col-span-2 justify-between">
                                <div className="flex flex-col">
                                    <p className="text-xl text-purple font-semibold">
                                    {books[0].genre}
                                    </p>
                                    <h1 className="text-3xl font-semibold">
                                        {books[0].title}
                                    </h1>

                                    <div className="flex items-center gap-4">
                                        <p className="text-xl">{books[0].author}</p>
                                        <div className="size-[7px] rounded-full bg-purple"/>
                                        <p className="text-xl">{books[0].pages} Páginas</p>
                                    </div>
                                </div>

                                <div className="mt-10 text-xl">
                                    <p>{books[0].description}</p>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-xl text-purple font-semibold mb-3">Disponibilizado por</h2>
                                    <div className="flex items-center gap-4">
                                        <div className="size-[50px] rounded-full bg-gray"></div>
                                        <div className="font-semibold">
                                            <p>Nome do usuário</p>
                                            <p className="text-gray-300">Endereço do usuário</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-10 justify-center">
                            <FilledButton text={"Tenho interesse"}></FilledButton>
                        </div>
                    </div>
                    
                </section>
            </MainLayout>
        </>
    )
}