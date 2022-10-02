const mysql=require('mysql');
const conUri={
    host:"localhost",
    user:"root",
    password:"mysql123",
    database:"ecom"
}

const connection=mysql.createConnection(conUri);
connection.connect((err)=>{
    if(!err){
        console.log("connect with database");

    }
    else{
        console.log(err);
    }
})

module.exports=connection;