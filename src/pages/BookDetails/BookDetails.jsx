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
                <div className="w-[60%] mt-10 md:mt-0 md:ml-20 md:w-[720px] xl:w-[1100px]">   
                    <button 
                    onClick={() => navigate(-1)} 
                    className="flex mt-10 mb-8 gap-1 py-1 px-3 border border-purple-tr rounded-md text-purple transition duration-400 ease hover:border-purple md:mt-8">
                        <BsArrowLeftShort className="text-2xl"/>
                        Voltar
                    </button>
                </div>

                <section className="w-[60%] mb-10 md:ml-20 md:w-[720px] xl:w-[1100px]">
                    <div className="p-10 bg-white rounded-sm shadow-cont">
                        <div className="flex flex-col justify-center md:grid grid-cols-2 xl:grid-cols-3">
                            <div className="col-span-1 flex justify-center">
                                <div className=" w-[250px] h-full md:mr-10 xl:mr-12">
                                    <img src={books[0].image} alt="" className="w-full h-full rounded-md"/>
                                </div>

                                <div className="md:w-[1px] md:h-[100%] md:mr-10 bg-purple"/>
                            </div>

                            <div className="flex flex-col items-center justify-between col-span-1 md:items-start xl:col-span-2">
                                <div className="flex flex-col">
                                    <p className="text-purple font-semibold md:text-md xl:text-xl">
                                    {books[0].genre}
                                    </p>
                                    <h1 className="font-semibold md:text-lg xl:text-3xl">
                                        {books[0].title}
                                    </h1>

                                    <div className="flex items-center gap-3 xl:gap-4">
                                        <p className="text-lg xl:text-xl">{books[0].author}</p>
                                        <div className="size-[7px] rounded-full bg-purple"/>
                                        <p className="text-lg xl:text-xl">{books[0].pages} Páginas</p>
                                    </div>
                                </div>

                                <div className="w-full mt-10 text-lg xl:text-xl">
                                    <p>{books[0].description}</p>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-lg text-purple font-semibold mb-3 xl:text-xl">Disponibilizado por</h2>
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