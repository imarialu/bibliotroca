import { useState, useEffect } from 'react';

import { getBook } from '../../services/bookService';

import MainLayout from "../../layouts/MainLayout";
import { BookCard } from '../../components/BookCard';

import { IoMdSearch } from "react-icons/io";

export default function Home(){
    const [search, setSearch] = useState(null);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await getBook(search);
            setBooks(response);
            console.log(response);
        }

        fetchBook();
    }, [search]);

    const handleSearch = (e) => {
        const title = e.target.value;
        setSearch(title)
    }

    return( 
        <>
            <MainLayout>
                <section className="mt-12 md:mt-0 md:ml-20">
                    <section className="flex justify-center">
                        <div className="w-[450px] h-[220px] my-10 rounded-2xl bg-gray md:w-[720px] xl:w-[1100px]"></div>
                    </section>

                    <section className="flex justify-center w-full">
                        <div className="flex items-center bg-white gap-2 mt-2 mb-8 w-[300px] text-md pl-5 py-1 border border-purple-tr rounded-full md:w-[500px]">
                            <IoMdSearch className="text-xl text-purple"/>
                            <input type="text" placeholder="Pesquisar" name='search' onChange={handleSearch} className="w-[200px] md:w-[400px] focus:outline-none"/>
                        </div>
                    </section>

                    <section className="flex flex-col gap-5 items-center">
                        <div className="justify-start max-w-[1100px] md:w-[720px] xl:w-[1100px]">
                            <h1 className="text-3xl text-purple font-outfit font-semibold">Livros disponíveis</h1>
                        </div>

                        <div className="grid grid-cols-1 gap-6 mb-5 md:grid-cols-2 xl:grid-cols-3">
                            {books.map((book) => {
                                return <BookCard
                                    key={book.uuid}
                                    image={book.imagem}
                                    user={book.usuario}
                                    condition={book.estado}
                                    title={book.titulo}
                                    author={book.autor}
                                    uuid={book.uuid}
                                />
                            })}
                        </div>
                    </section>
                </section>
            </MainLayout>
        </>
    )
}