import MainLayout from "../../layouts/MainLayout";
import Heading from "../../components/Heading";
import { Input } from "../../components/Input";
import FilledButton from "../../components/FilledButton";

export default function BookRegister(){
    return(
        <>
            <MainLayout>
                <header className="ml-20 w-[80%]">
                    <Heading text={"Cadastre um novo livro para troca"}/>
                </header>

                <section className="ml-20">
                    <form className="flex flex-col items-center p-8 border rounded-sm border-none shadow-cont">
                        <div className="flex">
                            <div className=" flex flex-col justify-between mr-8">
                                <img src="#" alt="" className="h-[85%] rounded-sm bg-gray-300"/>
                                <div className="rounded-full py-1 px-8 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">
                                    <input type="file" id="foto" className="hidden"/>
                                    <label htmlFor="foto">Selecionar imagem</label>
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-8">
                                    <div className="">
                                        <Input label={"Título"}/>
                                        <Input label={"Quantidade de páginas"}/>
                                    </div>
                                    <div className="">
                                        <Input label={"Autor"}/>
                                        <div className="flex flex-col">
                                            <label htmlFor="category">Categoria</label>
                                            <select name="category" id="category" className="w-[300px] h-8 mt-2 pl-2 border border-gray rounded-sm focus:outline-none focus:border-purple">
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

                        <div className="mt-8">
                            <FilledButton text={"Cadastrar livro"}/>
                        </div>
                    </form>
                </section>
            </MainLayout>
        </>
    )
} 