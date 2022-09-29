const sql=require('./db')


exports.insertUser=(req, res) =>{
    return new Promise(resolve=>{

    mainData = req.body;
    console.log(mainData);
    
    var cmd = `INSERT INTO customer(email,password,firstname,lastname,address,phno) values('${mainData.username}','${mainData.password}','${mainData.firstname}','${mainData.lastname}','${mainData.address}',${mainData.phno})`
   
   
   console.log(cmd);
  sql.query(cmd,(err,rows,fields)=> {
if(err){
    console.log(err);
}
else{
        console.log(rows);
      
      resolve(rows);
}
    })
      
})
}


exports.getAllUser=function(req,res){
    return new Promise(resolve=>{
    let command="SELECT * FROM customer";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}

exports.getByIdUser=function(id){
    return new Promise(resolve=>{
    let command="SELECT * FROM customer WHERE user_id=" +id;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}



exports.patchByIdUserUpdate= function(id){
 return new Promise(resolve=>{
let command=`UPDATE customer SET firstname = "Alfred", lastname="Schmidt" WHERE user_id=${id}`
console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});

}