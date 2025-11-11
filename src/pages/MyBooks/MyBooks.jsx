import { useState } from "react";

import { PiBooks } from 'react-icons/pi';
import { HiOutlineRefresh } from 'react-icons/hi';

import MainLayout from "../../layouts/MainLayout";
import Heading from "../../components/Heading";
import GhostButton from "./components/GhostButton";
import AvailableBooksSection from "./components/AvailableBooks/AvailableBooksSection";
import ExchangedBooksSection from "./components/ExchangedBooks/ExchangedBooksSection";

export default function MyBooks(){
    const [activeContainer, setActiveContainer] = useState("container-available");

    return (
        <>
            <MainLayout>
                <header className="mt-12 md:mt-0 md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <Heading text={"Meus Livros"}/>

                    <div className="flex gap-5">
                        <GhostButton 
                            isActive={activeContainer === "container-available"} 
                            onClick={() => setActiveContainer("container-available")} 
                            icon={<PiBooks className="text-2xl"/>} 
                            text={"Disponíveis"}>
                        </GhostButton>

                        <GhostButton 
                            isActive={activeContainer === "container-exchanged"} 
                            onClick={() => setActiveContainer("container-exchanged")} 
                            icon={<HiOutlineRefresh className="text-2xl"/>} 
                            text={"Trocados"}>
                        </GhostButton>
                    </div>
                    <hr className="mt-4 text-purple"/>
                </header>

                <section className="flex justify-center md:justify-start md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    {activeContainer === "container-available" && <AvailableBooksSection/>}
                    {activeContainer === "container-exchanged" && <ExchangedBooksSection/>}
                </section>
            </MainLayout>
        </>
    )
}