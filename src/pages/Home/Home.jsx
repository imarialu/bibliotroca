import { useState } from 'react'

import books from '../../data/books'
import MainLayout from "../../layouts/MainLayout";
import Sidebar from '../../components/Sidebar'
import { BookCard } from '../../components/BookCard'

export default function Home(){
    return( 
        <>
            <MainLayout>
                <section className="ml-20">
                    <section className="flex justify-center">
                        <div className="w-[1100px] h-[220px] m-10 rounded-2xl bg-[var(--color-gray)]"></div>
                    </section>

                    <section className="flex justify-center m-5">
                        <input type="text" placeholder="Busque o livro que procura" className="w-[500px] pl-5 py-2 mb-5 border-1 border-[var(--color-gray)] rounded-full focus:outline-none focus:border-[var(--color-purple)]"/>
                        <button></button>
                    </section>

                    <section className="flex flex-col gap-5 items-center">
                        <div className="justify-start max-w-[1100px] w-full">
                            <h1 className="text-2xl text-[var(--color-purple)] font-semibold">Livros disponíveis</h1>
                        </div>

                        <div className="max-w-[1100px] w-full grid grid-cols-3 gap-y-6 gap-x-6 justify-cente mb-10">
                            {books.map((book) => {
                                return <BookCard
                                    key={book.id}
                                    image={book.image}
                                    status={book.status}
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