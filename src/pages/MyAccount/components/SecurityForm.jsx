import { useState } from "react";

import { getUser } from "../../../services/userService";
import api from "../../../services/api";

import { Input } from "../../../components/Input";
import FilledButton from "../../../components/FilledButton";

export default function SecurityForm(){
    const [formData, setFormData] = useState({
        senhaAntiga: "",
        novaSenha: "",
        confirmacaoSenha: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    console.log(formData)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userRes = await getUser();

            const response = await api.put(`/users/${userRes.uuid}/password`, 
                formData, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            console.log(response);
        } catch (error) {
            console.log("Erro ao alterar senha: ", error);
        }
    }

    return(
        <form className="bg-white p-8 rounded-md shadow-cont" onSubmit={handleSubmit}>
            <h1 className="mb-5 text-xl font-bold text-purple">Alterar Senha</h1>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Input type="password" name="senhaAntiga" label={"Senha atual"} onChange={handleChange} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Input type="password" name="novaSenha" label={"Nova senha"} onChange={handleChange}/>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Input type="password" name="confirmacaoSenha" label={"Confirmar nova senha"} onChange={handleChange}/>
                </div>
            </div>

            <div className="flex mt-5 justify-center md:justify-start">
                <FilledButton text={"Atualizar Senha"}/>
            </div>
        </form>
    )
}