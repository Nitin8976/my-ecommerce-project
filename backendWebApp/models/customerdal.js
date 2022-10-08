const sql=require('./db')


exports.insertCustomer=(req, res) =>{
    return new Promise(resolve=>{
    
    var cmd = `INSERT INTO users(email,password,firstname,lastname,address,phno) values('${req.body.username}','${req.body.password}','${req.body.firstname}','${req.body.lastname}','${req.body.address}',${req.body.phno})`
   
   
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


exports.getAllCustomer=function(req,res){
    return new Promise(resolve=>{
    let command=    `SELECT * FROM users where role='customer'`;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}

exports.getByIdcutomer=function(id){
    return new Promise(resolve=>{
    let command="SELECT * FROM users WHERE customer=" +id;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}

exports.updateBypassword=function(req,res){
    return new Promise(resolve=>{
        let email =req.body.email;
        let password=req.body.password;
        let newpassword=req.body.confirmpassword;
    let command=`UPDATE users SET password='${newpassword}' WHERE password ='${password}' AND email='${email}'`;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        if(err){
            console.log(err);
        }
        else{
        resolve(rows);
        }
    })
});
}