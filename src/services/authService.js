import api from "./api";

// Login de usuário
export const loginUser = async (credentials) => {
    try{
        const response = await api.post('/auth/login', credentials);
        return response.data
    }catch(error){
        console.log("Erro ao fazer login: ", error);
        throw error;
    }
};

// Registro de usuário
export const registerUser = async (userData) => {
    try{
        const response = await api.post('/auth/register', userData);
        return response.data;
    }catch (error){
        console.log("Erro ao cadastrar usuário: ", error);
        throw error;
    }
};