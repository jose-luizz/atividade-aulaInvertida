import mysql from "mysql2";
// Sicronização com o banco de dados
export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "senai",
    database: "crud"
})