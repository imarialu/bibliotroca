import { useState } from 'react'

import books from '../../data/books'
import MainLayout from "../../layouts/MainLayout";
import { BookCard } from '../../components/BookCard'

export default function Home(){
    return( 
        <>
            <MainLayout>
                <section className="mt-10 md:mt-0 md:ml-20">
                    <section className="flex justify-center">
                        <div className="max-w-[1100px] w-[350px] h-[220px] my-10 rounded-2xl bg-gray md:w-[720px] xl:w-[1100px]"></div>
                    </section>

                    <section className="flex justify-center m-5">
                        <input type="text" placeholder="Busque o livro que procura" className="w-[300px] text-md pl-5 py-2 mb-5 border border-gray rounded-full focus:outline-none focus:border-purple md:w-[500px] md:text-lg md:py-2"/>
                        <button></button>
                    </section>

                    <section className="flex flex-col gap-5 items-center">
                        <div className="justify-start max-w-[1100px] mb-5 md:w-[720px] xl:w-[1100px]">
                            <h1 className="text-2xl text-purple font-semibold">Livros disponíveis</h1>
                        </div>

                        <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 xl:grid-cols-3">
                            {books.map((book) => {
                                return <BookCard
                                    key={book.id}
                                    image={book.image}
                                    condition={book.condition}
                                    title={book.title}
                                    author={book.author}
                                />
                            })}
                        </div>
                    </section>
                </section>
            </MainLayout>
        </>
    )
}