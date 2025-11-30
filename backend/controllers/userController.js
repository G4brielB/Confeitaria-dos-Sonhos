import userModel from "../models/userModel.js"

export default {

    async read(req, res) {
        try{
            const [users] = await userModel.getAllUsers()
            res.status(200).json({
                success: true,
                data: users
            })
        }catch(err){
            console.log("Erro ao listar os nomes. Codigo do erro: ", err)
            res.status(500).json({
                success: false,
                message: err
            })
        }
    },

    async create(req, res){
        try{
            const {username, email, phone, password} = req.body
            const [createUser] = await userModel.createUser(username, email, phone, password)
            res.status(201).json({
                success: true,
                message: "Usuario cadastrado.",
                id: createUser.insertId
            })
        }catch(err){
            console.log("Erro ao criar usuario", err)
            res.status(500).json({
                success: false,
                message: err
            })
        }
    },

    async update(req, res) {
        try{
            const id = req.params
            const {username, password} = req.body
            const updateUser = await userModel.updateUser(id, username, password)
            res.status(200).json({
                success: true,
                message: "Usuario alterado com sucesso!"
            })


        }catch(err){
            console.log("Erro ao mudar informações")
            res.status(500).json({
                success: false,
                message: err
            })
        }
    },

    async delete(req, res){
        try{
            const {id} = req.params
            const deleteUser = await userModel.deleteUser(id)
            res.status(200).json({
                success: true,
                message: "Usuario deletado com sucesso!"
            })
        }catch(err){
            console.log("Houve um erro ao excluir usuario. Codido do erro: ", err)
            res.status(500).json({
                success: false,
                message: err
            })
        }
    }

}