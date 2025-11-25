import api from './api';

// Buscar usuário atual
export const getUser = async () => {
    try{
        const response = await api.get('/users/me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });
        return response.data
    }catch(error){
        console.log("Erro ao buscar usuário atual: ", error);
        throw error;
    }
};

// Buscar usuário por id
export const getUserById = async () => {
    try{
        const response = await api.get(`/users/${uuid}`);
        return response.data;
    }catch(error){
        console.log("Erro ao buscar usuário: ", error);
        throw error;
    }
};

// Atualizar dados do usuário
export const updateUser = async () => {
    try{
        const response = await api.put(`/users/${uuid}`, userData);
        return response.data;
    }catch(error){
        console.log("Erro ao atualizar usuário: ", error);
        throw error;
    }
};

// Deletar conta do usuário
export const deleteUser = async () => {
    try{
        const response = await api.delete(`/users/${uuid}`);
        return response.data;
    }catch(error){
        console.log("Erro ao deletar conta: ", error);
        throw error;
    }
};

export const getAddress = async (userRes) => {
    try{
        const response = await api.get(`/address/user/${userRes.uuid}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar endereço: ", error);
        throw error
    }
}