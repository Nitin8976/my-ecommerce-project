const productdal=require('../models/productdal')


exports.getAll=async function(req,res){
    let result=[];
    result=await productdal.getAllProduct(req);
    res.send(result);
}
exports.getById=async function(req,res){
    let result=[];
    result=await productdal.getByIdProduct(req.params.id);
    res.send(result);

}
exports.insert=async function(req,res){
    let result=[];
    result=await productdal.insertProduct(req);
    res.send(result);

}
