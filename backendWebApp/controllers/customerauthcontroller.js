
import jwt  from 'jsonwebtoken';


export default class CustomerAuthController{

constructor(cauthmgr){
    this.customerAuthManager = cauthmgr;
}

login= async (req,res)=>{
    console.log(req.body)
    
    let result=[];
    result=await this.customerAuthManager.loginUser(req);
    console.log(result);
    
      req.session.isCustomer=result.map(result=>result.role)
      req.session.isCustomerEmail=result.map(result=>result.email)
     if((req.session.isCustomer== 'customer')){
         console.log(req.session.isCustomerEmail);
         
let jwtSecretKey="kuch_secret";
         let data={
            time:Date(),
            client:req.session.isCustomerEmail,
            user:req.session.isCustomer   
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
    result=await this.customerAuthManager.logoutUser(req);
    console.log(result);
    res.send(result);
//     res.redirect('/api/login');
}
}
