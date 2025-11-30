import db from "../config/db.js"

export default {

    getAllUsers() {
        try{
            const sql = "SELECT * FROM users"
            const response = db.query(sql);
            return response
        }catch(err){
            return console.log("Não foi possivel pegar dados de usuarios. Codigo do erro: ", err);
        }
        
    },

    createUser(username, email, phone, password) {
        try{
            const sql = "INSERT INTO users(username, email, phone, password) VALUES(?,?,?,?)"
            const response = db.query(sql, [username, email, phone, password])
            return response
        }catch(err){
            return console.log("Não foi possivel adicionar usuario. Codigo do Erro: ", err);
        }
        
    },

    updateUser(id, username, password) {
        try{
            const sql = "UPDATE users SET username=?, password=? WHERE id=?"
            const response = db.query(sql, [username, password, id])
            return response
        }catch(err){
            return console.log("Não foi possivel alterar usuario. Codigo do erro: ", err)
        }
    },

    deleteUser(id){
        try{
            const sql = "DELETE FROM users WHERE id=?"
            const response = db.query(sql, [id])
            return response
        }catch(err){
            return console.log("Erro ao deletar usuario. Codigo do Erro: ", err)
        }
    }
    

}
