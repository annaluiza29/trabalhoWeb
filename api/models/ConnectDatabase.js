import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "290905",
    database: "web1rep_2024"
});