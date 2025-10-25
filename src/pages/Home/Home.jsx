import { useState } from 'react'
import books from '../../data/books'
import Sidebar from '../../components/Sidebar'
import { BookCard } from '../../components/BookCard'

export default function Home(){
    return( 
        <>
            <Sidebar/>
            <main className="flex justify-center border-1">
                <section className="ml-20">
                    <section className="flex justify-center">
                        <div className="w-[1100px] h-[220px] m-10 rounded-2xl bg-[var(--color-gray)]"></div>
                    </section>

                    <section className="flex justify-center m-5">
                        <input type="text" placeholder="Busque o livro que procura" className="w-[600px] pl-2 py-2 border-1 focus:outline-none"/>
                        <button></button>
                    </section>

                    <section className="flex flex-col gap-5 items-center">
                        <div className="justify-start max-w-[1100px] w-full">
                            <h1 className="text-2xl text-[var(--color-purple)] font-semibold">Livros disponíveis</h1>
                        </div>

                        <div className="max-w-[1100px] w-full grid grid-cols-3 gap-y-8 gap-x-6 justify-center">
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
            </main>
        </>
    )
}