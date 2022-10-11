
import jwt  from 'jsonwebtoken';


export default class SellerAuthController{

constructor(sauthmgr){
    this.sellerAuthManager = sauthmgr;
}

login= async (req,res)=>{
    console.log(req.body)
    
    let result=[];
    result=await this.sellerAuthManager.loginUser(req);
    console.log(result);
    
      req.session.isSeller=result.map(result=>result.role)
      req.session.isSellerEmail=result.map(result=>result.email)
     if((req.session.isSeller== 'seller')){
         console.log(req.session.isSellerEmail);
         
let jwtSecretKey="kuch_secret";
         let data={
            time:Date(),
            client:req.session.isSellerEmail,
            user:req.session.isSeller   
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
logout= async (req,res)=>{
    let result=[];
    result=await this.sellerAuthManager.logoutUser(req);
    console.log(result);
    res.send(result);
//     res.redirect('/api/login');
}
}
