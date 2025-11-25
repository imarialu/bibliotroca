import { useState, useEffect } from "react";

import url from "../../../services/url";
import api from "../../../services/api";
import { getUser } from "../../../services/userService";
import { getAddress } from "../../../services/userService";

import { Input } from "../../../components/Input";
import FilledButton from "../../../components/FilledButton";

export default function MyProfileForm(){
    const [user, setUser] = useState([]);
    const [icone, setIcone] = useState(null);
    const [endereco, setEndereco] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const userRes = await getUser();
            setUser(userRes);
                
            const response = await getAddress(userRes);
            setEndereco(response[0]);
        };

        fetchData();
    }, [icone]); 

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await api.put(`/users/${user.uuid}`, 
                {
                    ...user,
                    ativo: 1
                }, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            console.log(response);
        }catch(error){
            console.log("Erro ao editar perfil: ", error);
        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setIcone(file);

        handleSubmitImagem(file);
    }

    const handleSubmitImagem = async (file) => {
        const fd = new FormData();

        fd.append("icone", file);

        try{
            const response = await api.post(`/users/${user.uuid}/icon`, 
                fd, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            setIcone(true);
        }catch(error){
            console.log("Erro ao editar icone de perfil: ", error);
        }
    }

    return(
        <form className="bg-white p-8 rounded-md shadow-cont" onSubmit={handleSubmit}>
            <h1 className="mb-5 text-xl font-bold text-purple">Dados Pessoais</h1>

            <div className="flex items-center gap-5">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-200">
                    <img src={url + "/img/" + user.icone} alt="Icone" className="rounded-full w-full h-full" />
                </div>
                
                <input type="file" name="icone" id="icone" className="hidden" onChange={handleImage} />
                <label 
                    htmlFor="icone"
                    type="button" 
                    className="rounded-full py-1 px-8 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h"
                >
                Alterar
                </label>
            </div>

            <hr className="mt-5 text-purple"/>

            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                    <Input 
                        label={"Nome de usuário"} 
                        value={user.login}
                        type="text"
                        name="login"
                        onChange={handleChange}
                    />
                    <Input 
                        label={"Nome"} 
                        value={user.nome}
                        type="text"
                        name="nome"
                        onChange={handleChange}
                    />

                    <Input 
                        label={"Email"} 
                        value={user.email}
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />

                    <Input 
                        label={"Telefone"} 
                        value={user.telefone}
                        type="text"
                        name="telefone"
                        onChange={handleChange}
                    />
                    
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <FilledButton text={"Salvar alterações"} type="submit" />
            </div>
        </form>
    )
}