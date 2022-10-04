const ordersdal=require('../models/ordersdal')
const jwt = require('jsonwebtoken')

exports.getAll=async function(req,res){
    let result=[];
    result=await ordersdal.getAllOrders(req);
    let jwtSecretKey="kuch_secret";
    let authKey="Authorization";
    let token =req.header(authKey);
    let extractedData=jwt.verify(token,jwtSecretKey)
    if(extractedData.client == "customer"){
        console.log(" procesing request for /api/ordres......");
        res.status(200).send(result);
    }
    else{
        res.status(403).send("unauthorized request");
    }
}
exports.getById=async function(req,res){
    let result=[];
    result=await ordersdal.getByIdOrders(req.params.id);
    res.send(result);

}
exports.insert=async function(req,res){
    let result=[];
    result=await ordersdal.insertOrders(req);
    res.send(result);

}
