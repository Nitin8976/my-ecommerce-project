
const customerlogindal=require('../../models/daldashboard/customersdashdal')

 
exports.login= async function(req,res){
    console.log(req.body)
    let result=[];
    result=await customerlogindal.loginUser(req);
    console.log(result);
     let isCustomer=result.map(result=>result.role)
     if(isCustomer=='customer'){
         console.log(isCustomer)
     res.redirect('/api/products');
     }
    // if(result.role==='seller'){
    //     res.redirect('/api/products');  
    // }
    else{
        console.log("error");
        res.send("login as customer")
    }
}
exports.logout= async function(req,res){
    let result=[];
    result=await customerlogindal.logoutUser(req);
    console.log(result);
    res.send(result);
//     res.redirect('/api/login');
}