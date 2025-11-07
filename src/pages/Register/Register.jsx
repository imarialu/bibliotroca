import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

export default function Register(){
    return(
        <main className="flex md:flex-row w-full bg-purple h-screen">
            <div className="hidden bg-purple md:block md:w-[50%] md:flex md:items-center md:justify-center">
                <img src="./imgs/bg.png" alt="Três leitores encostados em uma pilha de livros" className="w-[600px]"/>
            </div>

            <div className="flex flex-col w-full md:w-[50%] bg-white items-center justify-center md:rounded-l-2xl">
                <div className="space-y-2 mb-4">
                    <h1 className="text-4xl text-center font-bold text-purple">Cadastro</h1>
                    <p className="text-lg">
                        Já possui uma conta?{" "}
                        <Link to="/login" className="font-semibold text-purple">Faça Login</Link>
                    </p>
                </div>

                <form className="flex flex-col mb-5 w-[350px] lg:w-[400px]">
                    <Input label={"Nome completo"} type={"text"} placeholder={"Informe seu nome completo"}></Input>
                    <Input label={"Telefone"} placeholder={"(00) 00000-0000"}></Input>
                    <Input label={"Endereço"} placeholder={"Informe seu endereço"}></Input>
                    <div className="grid grid-cols-2 gap-4">
                        <Input label={"Estado"} type={"text"} placeholder={""}></Input>
                        <Input label={"Cidade"} type={"text"} placeholder={"Informe sua cidade"}></Input>
                    </div>
                    <Input label={"E-mail"} type={"email"} placeholder={"seuemail@email.com"}></Input>
                    <div className="grid grid-cols-2 gap-4">
                        <Input label={"Senha"} type={"password"} placeholder={"Crie uma senha"}></Input>
                        <Input label={"Confirmar senha"} type={"password"} placeholder={"Confirme sua senha"}></Input>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button className="w-[200px] h-8 bg-purple text-white font-bold rounded-full cursor-pointer">Criar Conta</button>
                    </div>
                </form>
            </div>
        </main>
    )
}