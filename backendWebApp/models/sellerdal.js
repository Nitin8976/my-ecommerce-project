const sql=require('./db')


exports.insertSeller=(req, res) =>{
    return new Promise(resolve=>{
    
    var cmd = `INSERT INTO seller(email,password,firstname,lastname,address,phno) values('${req.body.username}','${req.body.password}','${req.body.firstname}','${req.body.lastname}','${req.body.address}',${req.body.phno})`
   
   
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


exports.getAllSeller=function(req,res){
    return new Promise(resolve=>{
    let command="SELECT * FROM seller";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}

exports.getByIdSeller=function(id){
    return new Promise(resolve=>{
    let command="SELECT * FROM seller WHERE seller_id=" +id;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}

exports.removeByIdSeller=function(id){
    return new Promise(resolve=>{
    let command="DELETE FROM seller WHERE user_id=" +id;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}