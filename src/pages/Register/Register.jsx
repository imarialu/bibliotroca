import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

export default function Register(){
    return(
        <main className="flex flex-row w-full h-screen">
            <div className="w-[50%]">
                <img src="#" alt="" />
            </div>

            <div className="flex flex-col w-[50%] bg-white items-center justify-center">
                <div className="space-y-2 mb-8">
                    <h1 className="text-4xl text-center font-bold text-purple">Cadastro</h1>
                    <p className="text-lg">
                        Já possui uma conta?{" "}
                        <Link to="/login" className="font-semibold text-purple">Faça Login</Link>
                    </p>
                </div>

                <form className="flex flex-col mb-5">
                    <Input label={"Nome completo"} type={"text"} placeholder={""}></Input>
                    <Input label={"E-mail"} type={"email"} placeholder={""}></Input>
                    <Input label={"Senha"} type={"password"} placeholder={""}></Input>
                    <Input label={"Confirmar senha"} type={"password"} placeholder={""}></Input>

                    <div className="flex justify-center mt-8">
                        <button className="w-[200px] h-8 bg-purple text-white font-bold rounded-full cursor-pointer">Criar Conta</button>
                    </div>
                </form>
            </div>
        </main>
    )
}