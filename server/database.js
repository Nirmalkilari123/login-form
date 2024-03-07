const { Pool } = require("pg");

const pool = new Pool({
  // Connection options

  user: "postgres",
  password: "knkccbp@A1",
  host: "localhost",
  port: "5432",
  database: "nirmal_log", // PostgreSQL default port
});


/*const createTblQry=`CREATE TABLE transcation(tran_id serial primary key,
    tran_type varchar(50) unique not null,
    tran_date date ,
    ac_id int,
    modify_date date,)`

pool.query(createTblQry).then((response)=>{
    console.log("Table Created")
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})*/

/*const createTblQry=`CREATE TABLE accounts(user_id serial primary key,
    username varchar(50) unique not null,
    password varchar(50) unique not null)`

pool.query(createTblQry).then((response)=>{
    console.log("Table Created")
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})*/

/*pool.query("CREATE DATABASE nirmal_log").then((response)=>{
    console.log("Database Created")
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})*/

module.exports=pool;