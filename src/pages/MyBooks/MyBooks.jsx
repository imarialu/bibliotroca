import Sidebar from "../../components/Sidebar"

import { PiBooks } from 'react-icons/pi';
import { HiOutlineRefresh } from 'react-icons/hi';

export default function MyBooks(){
    return (
        <>
            <Sidebar/>
            <main className="flex justify-center min-h-screen h-full">
                <header className="ml-20 w-[80%]">
                    <div className="flex justify-start text-2xl font-bold text-[var(--color-purple)] mt-10 mb-8">
                        <h1>Meus Livros</h1>
                    </div>

                    <div className="flex gap-5">
                        <button className="flex py-1 px-6 gap-2 rounded-full border-1 border-[var(--color-purple)] text-[var(--color-purple)] font-semibold transition duration-400 ease hover:bg-[var(--color-transparent-purple)]">
                            <PiBooks className="text-2xl"/>
                            Disponíveis
                        </button>
                        <button className="flex py-1 px-6 gap-2 rounded-full border-1 border-[var(--color-purple)] text-[var(--color-purple)] font-semibold transition duration-400 ease hover:bg-[var(--color-transparent-purple)]">
                            <HiOutlineRefresh className="text-2xl"/>
                            Trocados
                        </button>
                    </div>
                    <hr className="mt-4 text-[var(--color-purple)]"/>
                </header>
                <section>

                </section>
            </main>
        </>
    )
}