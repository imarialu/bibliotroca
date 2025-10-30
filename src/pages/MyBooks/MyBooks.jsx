import { useState } from "react";

import { PiBooks } from 'react-icons/pi';
import { HiOutlineRefresh } from 'react-icons/hi';

import Sidebar from "../../components/Sidebar"
import Button from "./components/Button";
import AvailableBooksSection from "./components/AvailableBooks/AvailableBooksSection";
import ExchangedBooksSection from "./components/ExchangedBooks/ExchangedBooksSection";

export default function MyBooks(){
    const [activeContainer, setActiveContainer] = useState("container-available");

    return (
        <>
            <Sidebar/>
            <main className="flex flex-col items-center min-h-screen h-full">
                <header className="ml-20 w-[80%]">
                    <div className="flex justify-start text-2xl font-bold text-[var(--color-purple)] mt-10 mb-8">
                        <h1>Meus Livros</h1>
                    </div>

                    <div className="flex gap-5">
                        <Button 
                            isActive={activeContainer === "container-available"} 
                            onClick={() => setActiveContainer("container-available")} 
                            icon={<PiBooks className="text-2xl"/>} 
                            text={"Disponíveis"}>
                        </Button>

                        <Button 
                            isActive={activeContainer === "container-exchanged"} 
                            onClick={() => setActiveContainer("container-exchanged")} 
                            icon={<HiOutlineRefresh className="text-2xl"/>} 
                            text={"Trocados"}>
                        </Button>
                    </div>
                    <hr className="mt-4 text-[var(--color-purple)]"/>
                </header>

                <section className="ml-20 w-[80%]">
                    {activeContainer === "container-available" && <AvailableBooksSection/>}
                    {activeContainer === "container-exchanged" && <ExchangedBooksSection/>}
                </section>
            </main>
        </>
    )
}