var cartitemdal= require('../models/cartitemdal')

exports.cartitem= async function(req,res){
    let result=[];
    result=await cartitemdal.getAllcartitem(req.params.id);
    console.log(result);
    res.send(result);
}