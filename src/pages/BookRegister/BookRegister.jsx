import MainLayout from "../../layouts/MainLayout";
import Heading from "../../components/Heading";
import { Input } from "../../components/Input";
import FilledButton from "../../components/FilledButton";

export default function BookRegister(){
    return(
        <>
            <MainLayout>
                <header className="mt-10 md:mt-0 md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <Heading text={"Cadastre um novo livro para troca"}/>
                </header>

                <section className="md:ml-20 mb-10 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <form className="flex flex-col p-8 bg-white rounded-sm shadow-cont">
                        <div className="flex flex-col md:flex-row xl:grid grid-cols-3">
                            <div className="flex flex-col justify-between mb-10 md:mb-0 md:mr-8 xl:col-span-1 items-center">
                                <div className="w-[200px] h-[270px] mb-5 md:mb-0 md:w-[230px] md:h-[85%] rounded-sm bg-gray">
                                    {/* <img src="#" alt="" className="w-full h-full"/> */}
                                </div>

                                <div className="flex w-[200px] md:w-[230px] rounded-full justify-center items-center py-1 px-10 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">
                                    <input type="file" id="photo" className="hidden"/>
                                    <label htmlFor="photo" className="">Selecionar imagem</label>
                                </div>
                            </div>

                            <div className="xl:col-span-2">
                                <div className="flex flex-col">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label={"Título"}/>
                                        <Input label={"Autor"}/>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label={"Nº de páginas"}/>
                                        <div className="flex flex-col">
                                            <label htmlFor="category">Categoria</label>
                                            <select name="category" id="category" className="w-[160px] h-8 mt-2 pl-2 border border-gray rounded-sm focus:outline-none focus:border-purple md:w-[190px] xl:w-[330px]">
                                                <option value="">Selecione a categoria</option>
                                                <option value="romance">Romance</option>
                                                <option value="drama">Drama</option>
                                                <option value="terror">Terror</option>
                                                <option value="suspense">Suspense</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="status" className="text-lg mb-1">Estado do livro</label>
                                    <div className="flex gap-4 mb-2">
                                        <label htmlFor="newBook" className="flex gap-2">
                                            <input type="radio" name="statusBook" id="newBook"/>
                                            Novo
                                        </label>
                                        
                                        <label htmlFor="almostNew" className="flex gap-2">
                                            <input type="radio" name="statusBook" id="almostNew" />
                                            Seminovo
                                        </label>

                                        <label htmlFor="oldBook" className="flex gap-2">
                                            <input type="radio" name="statusBook" id="oldBook" />
                                            Antigo
                                        </label>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="description" className="text-lg mb-1">Descrição sobre o livro</label>
                                        <textarea name="description" id="description" rows="5" className="resize-none p-2 border border-gray rounded-sm focus:outline-none focus:border-purple"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <FilledButton text={"Cadastrar livro"}/>
                        </div>
                    </form>
                </section>
            </MainLayout>
        </>
    )
} 