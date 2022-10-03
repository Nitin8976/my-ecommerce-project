
const sellerlogindal=require('../models/sellerlogindal')

 
exports.login= async function(req,res){
    console.log(req.body)
    let result=[];
    result=await sellerlogindal.loginSeller(req);
    console.log(result);
     let isSeller=result.map(result=>result.role)
    if(isSeller=='seller'){
        console.log(isSeller)
sellerID = result.map(result=>result.userid);

req.session.sellerID=sellerID;
console.log(req.session.sellerID);


    res.redirect('/api/products');
    }
    // if(result.role==='seller'){
    //     res.redirect('/api/products');  
    // }
    else{
        console.log("error");
        res.send("login as customer")
    }
},
exports.logout= async function(req,res){
    let result=[];
    result=await sellerlogindal.logoutSeller(req);
    console.log(result);
    res.send(result);
//     res.redirect('/api/login');
}