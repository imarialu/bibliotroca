import { useState } from "react";

import { FaRegUser } from 'react-icons/fa6';
import { LuKeyRound } from 'react-icons/lu';

import Sidebar from "../../components/Sidebar";
import Button from "./components/Button";
import MyProfileForm from "./components/MyProfileForm";
import SecurityForm from "./components/SecurityForm";

export default function MyAccount(){
    const [activeForm, setActiveForm] = useState("profile-form")

    return(
        <>
            <Sidebar/>
            <main className="flex flex-col items-center min-h-screen h-full"> 
                <section className="ml-20 w-[70%]">
                    <div className="flex justify-start text-2xl font-bold text-[var(--color-purple)] mt-10 mb-8">
                        <h1>Minha Conta</h1>
                    </div>
                    
                    <div className="grid grid-cols-4">
                        <div className="flex flex-col w-[200px] h-[83px] border-1 border-[var(--color-transparent-purple)] rounded-sm">
                            <Button
                                isActive={activeForm === "profile-form"}
                                onClick={() => setActiveForm("profile-form")}
                                icon={<FaRegUser className="text-lg"/>} 
                                text={"Meu Perfil"}>
                            </Button>

                            <hr className="text-[var(--color-transparent-purple)]"/>

                            <Button 
                                isActive={activeForm === "security-form"}
                                onClick={() => setActiveForm("security-form")}
                                icon={<LuKeyRound className="text-lg"/>} 
                                text={"Segurança"}>
                            </Button>
                        </div>

                        <section className="col-span-3 mb-10">
                            {activeForm === "profile-form" && <MyProfileForm/>}
                            {activeForm === "security-form" && <SecurityForm/>}
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}