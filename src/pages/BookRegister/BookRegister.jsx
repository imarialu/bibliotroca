import { Input } from "../../components/Input";
import Sidebar from "../../components/Sidebar";

export default function BookRegister(){
    return(
        <>
            <Sidebar/>
            <main className="flex justify-center items-center min-h-screen h-full">
                <section className="ml-20">
                    <div className="text-2xl font-bold text-[var(--color-purple)] mb-5">
                        <h1>Cadastre um novo livro para troca</h1>
                    </div>
                    
                    <form className="flex p-10 border-1 rounded-sm border-none shadow-[0px_0px_5px_2px_rgba(198,_174,_230,_0.4)]">
                        <div className="">
                            <img src="#" alt=""/>
                            <input type="file"/>
                        </div>

                        <div>
                            <div className="flex gap-8">
                                <div className="">
                                    <Input label={"Título"}/>
                                    <Input label={"Autor"}/>
                                </div>
                                <div className="">
                                    <Input label={"Quantidade de páginas"}/>
                                    <div className="flex flex-col">
                                        <label htmlFor="category">Categoria</label>
                                        <select name="category" id="category" className="w-[300px] h-8 mt-2 pl-2 border-1 border-[var(--color-gray)] rounded-sm focus:border-[var(--color-purple)]">
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
                                <label htmlFor="estado" className="text-lg mb-1">Estado do livro</label>
                                <div className="flex gap-4 mb-2">
                                    <label htmlFor="newBook" className="flex gap-2">
                                        <input type="radio" name="newBook" id="newBook" />
                                        Novo
                                    </label>
                                    
                                    <label htmlFor="almostNew" className="flex gap-2">
                                        <input type="radio" name="almostNew" id="almostNew" />
                                        Seminovo
                                    </label>

                                    <label htmlFor="oldBook" className="flex gap-2">
                                        <input type="radio" name="oldBook" id="oldBook" />
                                        Antigo
                                    </label>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="description" className="text-lg mb-1">Descrição sobre o livro</label>
                                    <textarea name="description" id="description" rows="6" cols="50" className="p-2 border-1 border-[var(--color-gray)] rounded-sm focus:outline-none focus:border-[var(--color-purple)]"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}