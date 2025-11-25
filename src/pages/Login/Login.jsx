import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { Input } from "../../components/Input";

export default function Login(){
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });

    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await login(formData);
            
            if(response){
                //toast.sucess("Login feito com sucesso!");
                navigate('/');
            }else{
                //toast.error("Erro ao realizar o login." || res.error);
            }
        }catch(error){
            console.log("Erro ao realizar login: ", error);
        }
    }   
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <>
            <main className="flex md:flex-row w-full h-screen bg-purple">
                <div className="hidden bg-purple md:block md:w-1/2 md:flex md:items-center md:justify-center">
                    <img src="./imgs/bg.png" alt="Três leitores encostados em uma pilha de livros" className="w-[600px]"/>
                </div>

                <div className="flex flex-col w-full md:w-1/2 bg-white items-center justify-center md:rounded-l-2xl">
                    <div className="space-y-2 mb-8">
                        <h1 className="text-4xl text-center font-bold text-purple">Login</h1>
                        <p className="text-lg">
                            Não possui uma conta?{" "}
                            <Link to="/cadastro" className="font-semibold text-purple">Cadastre-se</Link>
                        </p>
                    </div>
                    
                    <form onSubmit={handleLogin} className="flex flex-col mb-5 w-[350px] lg:w-[400px]">
                        <Input 
                            label={"Nome de usuário"} 
                            type={"text"}
                            name="login" 
                            value={formData.login} 
                            onChange={handleChange}
                        />
                        <Input 
                            label={"Senha"} 
                            type={"password"}
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange}
                        />
                        {/* <Link to="" className="underline text-purple">Esqueci minha senha</Link> */}
                        <div className="flex justify-center mt-10">
                            <button type="submit" className="w-[200px] h-8 bg-purple text-white font-bold rounded-full cursor-pointer">Entrar</button>
                        </div>
                    </form>

                    <div className="flex items-center mb-5">
                        <hr className="w-[180px] border-gray"/>
                        <p className="mx-2">Ou</p>
                        <hr className="w-[180px] border-gray"/>
                    </div>

                    <button className="flex aling-center gap-2 px-2 py-1 border border-purple rounded-sm cursor-pointer hover:text-purple">
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