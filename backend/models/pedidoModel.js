import db from "../config/db.js"

export default {
    getAllPedidos() {
        try{
            const sql = "SELECT * FROM pedidos"
            const results = db.query(sql)
            return results
        }catch(err){
            console.log("Não foi possivel listar pedidos. ", err)
        }
    },

    createPedido(cakeName, price, client, clientNumber, description) {
        try{
            const sql = "INSERT INTO pedidos(cakename, price, client, clientNumber, description) VALUES (?, ?, ?, ?, ?)"
            const results = db.query(sql, [cakeName, price, client, clientNumber, description])
            return results
        }catch(err){
            console.log("Não foi possivel criar pedido. ", err)
        }
    },

    updatePedido(description, id) {
        try{
            const sql = "UPDATE pedidos SET description=? WHERE id=? "
            const results = db.query(sql, [description, id])
            return results
        }catch(err){
            console.log("Não foi possivel alterar pedido. ", err)
        }
    },

    deletePedido(id) {
        try{
            const sql = "DELETE FROM pedidos WHERE id=?"
            const results = db.query(sql, [id])
            return results
        }catch(err){
            console.log("Não foi possivel deletar pedido. ", err)
        }
    }
}