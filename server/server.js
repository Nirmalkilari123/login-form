const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/adduser", (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];
  console.log("Username :" + username);
  console.log("Password :" + password);

  const insertData = `insert into accounts(username,password) values('${username}','${password}')`;

  pool
    .query(insertData)
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
  res.send(5000, () => console.log("Server on locahost:5000"));
});

app.listen(5000, () => console.log("Server on localhost:5000"));

/*app.get("/adduser",(req,res)=>{
    console.log(req.body)
    res.send("Response Receieved"+ req.body)
})

app.listen(5000,()=>console.log("Server on localhost:5000"))*/
