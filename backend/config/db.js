import mysql from "mysql2/promise"

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"admin",
    database: "dream"

});

db.connect((err) => {
    if(err){
        console.log("Falha ao conectar com o banco de dados. Codigo do erro: ", err);
    }else{
        return;
    }
})

export default db
