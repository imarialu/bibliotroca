import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { Input } from "../../components/Input";

export default function Register(){
    const [formData, setFormData] = useState({
        login: "",
        nome: "",
        email: "",
        password: "",
        role: 1,
        icone: "default.png",
        ativo: 1,
    });

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await api.post(`/users`, 
                formData
            );
            console.log(response);
            navigate('/login');
        }catch(error){
            console.log("Erro ao cadastrar: ", error);
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    console.log(formData);
    return(
        <main className="flex md:flex-row w-full bg-purple h-screen">
            <div className="hidden bg-purple md:block md:w-1/2 md:flex md:items-center md:justify-center">
                <img src="./imgs/bg.png" alt="Três leitores encostados em uma pilha de livros" className="w-[600px]"/>
            </div>

            <div className="flex flex-col w-full md:w-1/2 bg-white items-center justify-center md:rounded-l-2xl">
                <div className="space-y-2 mb-4">
                    <h1 className="text-4xl text-center font-bold text-purple">Cadastro</h1>
                    <p className="text-lg">
                        Já possui uma conta?{" "}
                        <Link to="/login" className="font-semibold text-purple">Faça Login</Link>
                    </p>
                </div>

                <form className="flex flex-col mb-5 w-[350px] lg:w-[400px]" onSubmit={handleSubmit}>
                    <Input 
                        label={"Nome de usuário"} 
                        value={formData.login}
                        type="text"
                        name="login"
                        onChange={handleChange}
                    />
                    <Input 
                        label={"Nome"} 
                        value={formData.nome}
                        type="text"
                        name="nome"
                        onChange={handleChange}
                    />

                    <Input 
                        label={"Email"} 
                        value={formData.email}
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />

                    <Input 
                        label={"Telefone"} 
                        value={formData.telefone}
                        type="text"
                        name="telefone"
                        onChange={handleChange}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <Input 
                            label={"Senha"} 
                            type={"password"}
                            name="password"
                            onChange={handleChange}
                        />
                        <Input 
                            label={"Confirmar senha"} 
                            type={"password"}
                        />
                    </div>

                    <div className="flex justify-center mt-4">
                        <button type="submit" className="w-[200px] h-8 bg-purple text-white font-bold rounded-full cursor-pointer">Criar Conta</button>
                    </div>
                </form>
            </div>
        </main>
    )
}