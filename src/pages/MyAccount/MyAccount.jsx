import { useState } from "react";

import { HiOutlineUser } from "react-icons/hi";
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
                <header className="mt-12 md:mt-0 md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <Heading text={"Minha Conta"}/>
                </header>
                
                <section className="md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <div className="flex flex-col xl:grid grid-cols-4">
                        <div className="mb-10 flex flex-col w-[200px] h-[83px] border border-purple-tr rounded-sm md:mr-10">
                            <Button
                                isActive={activeForm === "profile-form"}
                                onClick={() => setActiveForm("profile-form")}
                                icon={<HiOutlineUser className="text-xl"/>} 
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

                        <section className="col-span-3 mb-5">
                            {activeForm === "profile-form" && <MyProfileForm/>}
                            {activeForm === "security-form" && <SecurityForm/>}
                        </section>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}