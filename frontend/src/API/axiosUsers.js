import axios from 'axios';

const instance = axios.create({
    baseURL:"http://localhost:3001",
    timeout: 1000,
})

export const createUser = async (data) => {
    try{
        const results = await instance.post("/users", {
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.senha
        })

        return results.data

    }catch(err){
        console.log("Não foi possivel contato com servidor para criar usuario. ", err)
    }
}

export const readUsers = async () => {
    try{
        const results = await instance.get("/users")
        return results.data
    }catch(err){
        console.log("Não foi posivel contato com servidor para listar usuarios", err)
    }
}

export const updateUser = async (id, {data}) => {
    try{
        const results = await instance.put(`/users/:${id}`, {
            username: data.username,
            password: data.senha
        })

        return results.data

    }catch(err){
        console.log("Não foi possivel comunicação para alterar usuario.",err)
    }
}

export const deleteUser = async (id) => {
    try{
        const results = await instance.delete(id)
        return results.data
    }catch(err){
        console.log("Não foi possivel comunicação com servidor para deletar", err)
    }
}