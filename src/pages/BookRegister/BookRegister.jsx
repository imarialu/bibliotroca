import { Input } from "../../components/Input";
import Sidebar from "../../components/Sidebar";

export default function BookRegister(){
    return(
        <>
            <Sidebar/>
            <main className="flex justify-end border-1">
                <section className="w-[94%]">
                    <div className="m-8">
                        <h1>Cadastre um novo livro para troca</h1>
                    </div>
                    
                    <form className="flex gap-5 border-1">
                        <div className="">
                            <img src="#" alt="" />
                            <input type="file" />
                        </div>

                        <div className="flex gap-4">
                            <div>
                                <Input label={"Título"}/>
                                <Input label={"Autor"}/>

                                <label htmlFor="estado">Estado do livro</label>
                                <div>
                                    <input type="radio" name="novo" id="novo" />
                                    <label htmlFor="novo">Novo</label>

                                    <input type="radio" name="seminovo" id="seminovo" />
                                    <label htmlFor="semi">Seminovo</label>

                                    <input type="radio" name="antigo" id="antigo" />
                                    <label htmlFor="antigo">Antigo</label>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="descricao">Descrição sobre o livro</label>
                                    <textarea name="descricao" id="descricao" rows="4" cols="50" className="border-1"></textarea>
                                </div>
                            </div>
                            
                            <div>
                                <Input label={"Quantidade de páginas"}/>
                                <div className="flex flex-col">
                                    <label htmlFor="categoria">Categoria</label>
                                    <select name="categoria" id="categoria" className="w-[100px]">
                                        <option value="romance">Romance</option>
                                        <option value="drama">Drama</option>
                                        <option value="terror">Terror</option>
                                        <option value="suspense">Suspense</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                
                            </div>

                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}