// var cartitemdal= require('../models/cartitemdal')

// exports.cartitem= async function(req,res){
//     let result=[];
//     result=await cartitemdal.getAllcartitem(req.params.id);
//     console.log(result);
//     res.send(result);
// }

// app.get("/api/cart",(req, res)=>{  
//     if(req.session.cart){
//        res.send(req.session.cart);
//        res.end();
//     }
//     else{
//        req.session.cart=[];
//        res.send(req.session.cart);
//        res.end();
//    }
// });

// app.get("/api/addtocart/:id",(req,res)=>{
//    let item={"productid": req.params.id, quantity:1};
//    req.session.cart.push(item);
//    res.send(req.session.cart);
//    res.end();
// } );


// app.get("/api/removefromcart/:id",(req,res)=>{ 
//    req.session.cart=req.session.cart.filter((data)=>(data.productid !=req.params.id))
//    res.send(req.session.cart);
//    res.end();
// });

// app.get("/api/checkout",(req,res)=>{
//    req.session.destroy((err)=>{
//        console.log( "session is destroyed");
//        res.send("session is destroyed is explicitly");
//        res.end();
//    })
// // })