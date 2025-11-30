import pedidoModel from "../models/pedidoModel.js"


export default {
    async read(req, res){
        try{
            const [response] = await pedidoModel.getAllPedidos()
            res.status(200).json({
                success: true,
                message: "Listado",
                data: response
            })
        }catch(err){
            console.log(err)
            res.status(500).json({
                success: false,
                message: "Não foi possivel listar"
            })
        }
    },
    async create(req, res){
        try{
            const {cakeName, price, client, clientNumber, description} = req.body
            const response = await pedidoModel.createPedido(cakeName, price, client, clientNumber, description)

            res.status(201).json({
                success: true,
                message: "pedido criado",
                id: response.insertId
            })

        }catch(err){
            console.log(err)
            res.status(500).json({
                success: false,
                message: "Não foi possivel criar"
            })
        }
    },
    async update(req, res){
        try{
            const {description} = req.body
            const {id} = req.params

            const response = await pedidoModel.updatePedido(description, id)

            res.status(200).json({
                success: true,
                message: "alterado com sucesso."
            })


        }catch(err){
            console.log(err)
            res.status(500).json({
                success: false,
                message: "Não foi possivel update"
            })
        }
    },
    async delete(req, res){
        try{
            const {id} = req.params
            const response = await pedidoModel.deletePedido(id)

            res.status(200).json({
                success: true,
                message: "pedido Deletado!"
            })

        }catch(err){
            console.log(err)
            res.status(500).json({
                success: false,
                message: "Não foi possivel delete"
            })
        }
    }
}