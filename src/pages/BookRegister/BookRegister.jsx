import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import url from "../../services/url";
import api from "../../services/api";
import { getGenre } from "../../services/bookService";
import { getUser } from "../../services/userService";

import MainLayout from "../../layouts/MainLayout";
import Heading from "../../components/Heading";
import { Input } from "../../components/Input";
import FilledButton from "../../components/FilledButton";

export default function BookRegister(){
    const [genres, setGenres] = useState([]);
    const [imagem, setImagem] = useState(null);
    const [formData, setFormData] = useState({
        titulo: "",
        autor: "",
        paginas: "",
        categoria: "",
        estado: "",
        trocado: false,
        usuario: "",
        descricao: "",
        ativo: true
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            const response = await getGenre();
            setGenres(response);
        }

        fetchBook();
    }, []);

    const handleRegisterBook = async (e) => {
        e.preventDefault();
        try{
            const userRes = await getUser();

            const fd = new FormData();

            fd.append("livro", JSON.stringify(
                {
                    ...formData,
                    categoria: {
                        uuid: formData.categoria
                    },
                    usuario: {
                        uuid: userRes.uuid
                    }
                }
            ))

            fd.append("imagem", imagem);
            
            const response = await api.post('/books', 
                fd, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            
            navigate('/meus-livros');
        }catch(error){
            console.log("Erro ao cadastrar livro: ", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return(
        <>
            <MainLayout>
                <header className="mt-12 md:mt-0 md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <Heading text={"Cadastro de livro"}/>
                </header>

                <section className="md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <form onSubmit={handleRegisterBook} className="flex flex-col p-8 mb-10 bg-white rounded-sm shadow-cont sm:mb-0">
                        <div className="flex flex-col md:flex-row xl:grid grid-cols-3">
                            <div className="flex flex-col justify-between mb-10 md:mb-0 md:mr-8 xl:col-span-1 items-center">
                                <div className="w-[220px] h-[280px] mb-5 md:mb-0 md:w-[230px] md:h-[330px] rounded-sm bg-gray">
                                    <img src={url + "/img/book-default.png"} alt="Imagem do livro do usuário" className="w-full h-full rounded-sm" />
                                </div>

                                <div className="flex w-[230px] md:w-[230px] rounded-full justify-center items-center py-1 px-10 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">
                                    <input type="file" id="imagem" name="imagem" className="hidden" onChange={(e) => setImagem(e.target.files[0])}/>
                                    <label htmlFor="imagem" className="">Selecionar imagem</label>
                                </div>
                            </div>

                            <div className="xl:col-span-2">
                                <div className="flex flex-col">
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <Input 
                                            required
                                            label={"Título"} 
                                            name="titulo" 
                                            onChange={handleChange}
                                        />
                                        <Input 
                                            required
                                            label={"Autor"} 
                                            name="autor" 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <Input 
                                            required
                                            label={"Nº de páginas"} 
                                            name="paginas" 
                                            onChange={handleChange}
                                        />
                                        <div className="flex flex-col">
                                            <label htmlFor="genre" className="text-lg">Gênero</label>
                                            <select 
                                                required
                                                name="categoria" 
                                                id="genre" 
                                                onChange={handleChange}
                                                className="w-[325px] h-8 mt-1 mb-3 pl-2 border border-gray rounded-sm focus:outline-none focus:border-purple md:w-[190px] xl:w-[340px]">
                                                    <option value="">Selecione o gênero</option>
                                                    {genres.map(genre => (
                                                        <option key={genre.uuid} value={genre.uuid}>
                                                            {genre.nome}
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
                                            <input 
                                                type="radio" 
                                                name="estado" 
                                                id="newBook" 
                                                value={0} 
                                                onChange={handleChange}
                                            />
                                                Novo
                                        </label>
                                        
                                        <label htmlFor="likeNew" className="flex gap-2">
                                            <input 
                                                type="radio" 
                                                name="estado" 
                                                id="likeNew" 
                                                value={1} 
                                                onChange={handleChange}
                                            />
                                                Seminovo
                                        </label>

                                        <label htmlFor="oldBook" className="flex gap-2">
                                            <input 
                                                type="radio" 
                                                name="estado" 
                                                id="oldBook" 
                                                value={2} 
                                                onChange={handleChange}
                                            />
                                            Antigo
                                        </label>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="description" className="text-lg mb-1">Descrição sobre o livro</label>
                                        <textarea 
                                            name="descricao" 
                                            id="description" 
                                            rows="5" 
                                            className="resize-none p-2 border border-gray rounded-sm focus:outline-none focus:border-purple" 
                                            onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <FilledButton text={"Cadastrar livro"} type="submit" />
                        </div>
                    </form>
                </section>
            </MainLayout>
        </>
    )
} 