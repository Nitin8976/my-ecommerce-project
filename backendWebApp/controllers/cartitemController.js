
import jwt from 'jsonwebtoken'

export default class cartitemController{
constructor(){

}

get=("/api/cart",(req, res)=>{  
     if(req.session.cart){
        res.send(req.session.cart);
        res.end();
     }
     else{
        req.session.cart=[];
        res.send(req.session.cart);
        res.end();
    }
});
 postcartitem=(req,res)=>{
    req.body
console.log(req.session.isCustomerEmail);
console.log(req.session.isCustomer);
let jwtSecretKey="kuch_secret";
let authKey="Authorization";
let token =req.header(authKey);
console.log(token);
let extractedData=jwt.verify(token,jwtSecretKey)  
if(extractedData.client == "customer"){
    let item={"productid": req.params.id,"producttitle": req.body.title ,quantity:1};
    req.session.cart.push(item);
    res.send(req.session.cart);
    res.end();
}
} ;


// get("/api/removefromcart/:id",(req,res)=>{ 
//     req.session.cart=req.session.cart.filter((data)=>(data.productid !=req.params.id))
//     res.send(req.session.cart);
//     res.end();
// });

// get("/api/checkout",(req,res)=>{
//     req.session.destroy((err)=>{
//         console.log( "session is destroyed");
//         res.send("session is destroyed is explicitly");
//         res.end();
//     })
// })
}