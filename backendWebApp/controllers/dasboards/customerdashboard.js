
const customerlogindal=require('../../models/daldashboard/customersdashdal')
const jwt = require('jsonwebtoken')
 
exports.login= async function(req,res){
    console.log(req.body)
    let result=[];
    result=await customerlogindal.loginUser(req);
    console.log(result);
     let isCustomer=result.map(result=>result.role)
     if(isCustomer=='customer'){
         console.log(isCustomer);
         
let jwtSecretKey="kuch_secret";
         let data={
            time:Date(),
            client:isCustomer    
   };
   console.log(data);
   let token=jwt.sign(data,jwtSecretKey);
   console.log(token);
   res.status(200).send(token);
}
else{
   res.status(403).send("Invalid User");
     res.redirect('/api/products');
     }
    // if(result.role==='seller'){
    //     res.redirect('/api/products');  
    // }

}
exports.logout= async function(req,res){
    let result=[];
    result=await customerlogindal.logoutUser(req);
    console.log(result);
    res.send(result);
//     res.redirect('/api/login');
}