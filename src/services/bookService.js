import api from "./api";

// Busca livros
export const getBook = async (titulo) => {
    try{
        const response = await api.get(`/books${titulo != null ? `?titulo=${titulo}` : ""}`, {});
        return response.data;
    }catch(error){
        console.log("Erro ao buscar livro: ", error);
        throw error;
    }
};

// Buscar livro por id
export const getBookById = async (uuid) => {
    try{
        const response = await api.get(`/books/${uuid}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar livro: ", error);
        throw error;
    }
};

export const getBooksUser = async (userRes) => {
    try{
        const response = await api.get(`/books/user/${userRes.uuid}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar livros: ", error);
        throw error
    }
}

// Buscar gênero
export const getGenre = async () => {
    try{
        const response = await api.get('/genre', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar gênero: ", error);
        throw error;
    }
}

// Criar livro
export const createBook = async () => {
    try{
        const response = await api.post('/books', bookData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao cadastrar livro: ", error);
        throw error;
    }
};

// Atualizar livro
export const updateBook = async () => {
    try{
        const response = await api.put(`/books/${uuid}`, bookData);
        return response.data;
    }catch(error){
        console.log("Erro ao atualizar livro: ", error);
        throw error;
    }
};

// Deletar livro
export const deleteBook = async (uuid) => {
    try{
        const response = await api.put(`/books/${uuid}/delete`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao deletar livro: ", error);
        throw error;
    }
};

export const getBookExchange = async (userRes) => {
    try{
        const response = await api.get(`/books/user/${userRes.uuid}/exchanges`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar livros: ", error);
        throw error
    }
};

// Marcar livro como trocado
export const bookExchange = async (uuid) => {
    try{
        const response = await api.put(`/books/${uuid}/set-exchange`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao marcar livro como trocado: ", error);
        throw error;
    }
};



