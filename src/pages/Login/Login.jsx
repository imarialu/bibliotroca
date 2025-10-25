import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

export default function Login(){
    return(
        <>
            <main className="flex flex-row w-full h-screen">
                <div className="w-[50%]">
                    <img src="#" alt="" />
                </div>

                <div className="flex flex-col w-[50%] bg-white text-[var(--color-text)] items-center aling-center justify-center">
                    <div className="space-y-2 mb-8">
                        <h1 className="text-4xl text-center font-bold text-[var(--color-purple)]">Login</h1>
                        <p className="text-lg">
                            Não possui uma conta?{" "}
                            <Link to="/cadastro" className="font-semibold text-[var(--color-purple)]">Cadastre-se</Link>
                        </p>
                    </div>

                    
                    <form className="flex flex-col mb-5">
                        <Input label={"E-mail"} type={"email"} placeholder={""}></Input>
                        <Input label={"Senha"} type={"password"} placeholder={""}></Input>
                        <a href="#" className="underline hover:text-[var(--color-purple)]">Esqueci minha senha</a>
                        {/* <Link to="" className="underline hover:text-[var(--color-purple)]">Esqueci minha senha</Link> */}
                        <div className="flex justify-center mt-10">
                            <button className="w-[200px] h-8 bg-[var(--color-purple)] text-white font-bold rounded-full cursor-pointer">Entrar</button>
                        </div>
                    </form>

                    <div className="flex items-center mb-5">
                        <hr className="w-[180px] border-[var(--color-gray)]"/>
                        <p className="mx-2">Ou</p>
                        <hr className="w-[180px] border-[var(--color-gray)]"/>
                    </div>

                    <button className="flex aling-center gap-2 px-2 py-1 border-1 border-[var(--color-purple)] rounded-sm cursor-pointer hover:text-[var(--color-purple)]">
                        <div className="flex items-center justify-center w-[25px]">
                            <img src="/icons/icon-google.png" alt="Ícone do Google" className="size-[20px] items-center"/>
                        </div>
                        Entre com o Google
                    </button>
                </div>
            </main>
        </>
    )
}