
import sql from  './db.js' 

import jwt  from 'jsonwebtoken';

export default class CustomerLoginManager{
    constructor(){}

loginUser=function(req,res){
    return new Promise(resolve=>{
        let username = req.body.email;
        let password = req.body.password;
        
        // Ensure the input fields exists and are not empty
        if (username && password) {
            console.log(username);
            // Execute SQL query that'll select the account from the database based on the specified username and password
            let cmd=`SELECT * from users WHERE email='${username}' and password='${password}' `
        sql.query(cmd,(err,rows,fields)=> {
                if (err) throw err;
                // If the account exists
                if (rows.length > 0) {
                    // Redirect to home page
    
                    resolve(rows);
                
                } else {
                    resolve('Incorrect Username or Password!');
                }			
            });
        } else {
            resolve('Please enter Username and Password!');
        }
    });
    
}


logoutUser= function (req, res) {

   return new Promise(resolve=>{
     req.session.destroy();
    resolve('success', 'Login Again Here');
   })
  }

 updateBypassword=function(req,res){
    return new Promise(resolve=>{
        let email =req.body.email;
        let password=req.body.password;
        let newpassword=req.body.confirmpassword;
        let jwtSecretKey="kuch_secret";
            let authKey="Authorization";
    let token =req.header(authKey);
    let extractedData=jwt.verify(token,jwtSecretKey)
    if(extractedData.client == req.session.isCustomerEmail){
    let command=`UPDATE users SET password='${newpassword}' WHERE password ='${password}' AND email='${email}'`;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        if(err){
            console.log(err);
        }
        else{
        resolve(rows);
        }
    });
}else{
    console.log("try again");
}
    }
    )
}
}