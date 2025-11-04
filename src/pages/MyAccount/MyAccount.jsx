import { useState } from "react";

import { FaRegUser } from 'react-icons/fa6';
import { LuKeyRound } from 'react-icons/lu';

import MainLayout from "../../layouts/MainLayout";
import Heading from "../../components/Heading";
import Button from "./components/Button";
import MyProfileForm from "./components/MyProfileForm";
import SecurityForm from "./components/SecurityForm";

export default function MyAccount(){
    const [activeForm, setActiveForm] = useState("profile-form")

    return(
        <>
            <MainLayout>
                <header className="ml-20 w-[1100px]">
                    <Heading text={"Minha Conta"}/>
                </header>
                
                <section className="ml-20 w-[1100px]">
                    <div className="grid grid-cols-4">
                        <div className="flex flex-col w-[200px] h-[83px] border border-purple-tr rounded-sm">
                            <Button
                                isActive={activeForm === "profile-form"}
                                onClick={() => setActiveForm("profile-form")}
                                icon={<FaRegUser className="text-lg"/>} 
                                text={"Meu Perfil"}>
                            </Button>

                            <hr className="text-purple-tr"/>

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
            </MainLayout>
        </>
    )
}