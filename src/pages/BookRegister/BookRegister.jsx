import MainLayout from "../../layouts/MainLayout";
import Heading from "../../components/Heading";
import { Input } from "../../components/Input";
import FilledButton from "../../components/FilledButton";

export default function BookRegister(){
    const genres = [
        "Romance", 
        "Fantasia", 
        "Suspense/Misterio", 
        "Terror", 
        "Ficção Científica", 
        "Aventura", 
        "Drama", 
        "Biografia/Autobiografia",
    ];

    return(
        <>
            <MainLayout>
                <header className="mt-12 md:mt-0 md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <Heading text={"Cadastrdo de livro"}/>
                </header>

                <section className="md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <form className="flex flex-col p-8 mb-10 bg-white rounded-sm shadow-cont sm:mb-0">
                        <div className="flex flex-col md:flex-row xl:grid grid-cols-3">
                            <div className="flex flex-col justify-between mb-10 md:mb-0 md:mr-8 xl:col-span-1 items-center">
                                <div className="w-[220px] h-[280px] mb-5 md:mb-0 md:w-[230px] md:h-[85%] rounded-sm bg-gray">
                                    {/* <img src="#" alt="" className="w-full h-full"/> */}
                                </div>

                                <div className="flex w-[230px] md:w-[230px] rounded-full justify-center items-center py-1 px-10 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">
                                    <input type="file" id="photo" className="hidden"/>
                                    <label htmlFor="photo" className="">Selecionar imagem</label>
                                </div>
                            </div>

                            <div className="xl:col-span-2">
                                <div className="flex flex-col">
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <Input label={"Título"}/>
                                        <Input label={"Autor"}/>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <Input label={"Nº de páginas"}/>
                                        <div className="flex flex-col">
                                            <label htmlFor="genre" className="text-lg">Gênero</label>
                                            <select 
                                                required
                                                name="genre" 
                                                id="genre" 
                                                className="w-[325px] h-8 mt-1 mb-3 pl-2 border border-gray rounded-sm focus:outline-none focus:border-purple md:w-[190px] xl:w-[340px]">
                                                    <option value="">Selecione o gênero</option>
                                                    {genres.map(genre => (
                                                        <option key={genre} value={genre}>
                                                            {genre}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="status" className="text-lg">Estado do livro</label>
                                    <div className="flex gap-4 my-2">
                                        <label htmlFor="newBook" className="flex gap-2">
                                            <input type="radio" name="statusBook" id="newBook"/>
                                            Novo
                                        </label>
                                        
                                        <label htmlFor="likeNew" className="flex gap-2">
                                            <input type="radio" name="statusBook" id="likeNew" />
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