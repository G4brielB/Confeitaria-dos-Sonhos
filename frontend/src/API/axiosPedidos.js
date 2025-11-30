import axios from "axios"

const instance = axios.create({
    baseURL:"http://localhost:3001",
    timeout: 1000
})

export const getAllPedidos = async () => {
    try{
        const response = await instance.get("/pedidos")
        return response.data
    }catch(err){console.log(err)}
}

export const createPedido = async (data) => {
    try{
        const pedido = {
            cakeName: data.cakename,
            price: data.price,
            client: data.client,
            clientNumber: data.clientNumber,
            description: data.description
        }
        const response = await instance.post("/pedidos", pedido)
        return response
    }catch(err){console.log(err)}    
}

export const updatePedido = async (description, id) => {
    try{
        const descricao = {
            description: description
        }
    const response = await instance.put(`/pedidos/:${id}`, descricao)
    return response
    }catch(err){console.log(err)}
}

export const deletePedido = async (id) => {
    try{
        const response = await instance.delete(id)
        return response
    }catch(err){console.log(err)}
}