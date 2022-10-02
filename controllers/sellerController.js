const sellerdal=require('../models/sellerdal')

exports.insert=async function(req,res){
    let result=[];
    result=await sellerdal.insertSeller(req);
    res.send(result);

}
exports.getAll=async function(req,res){
    let result=[];
    result=await sellerdal.getAllSeller();
    res.send(result);
req.session.seller_id=seller_id
req.session.username=username;


}



exports.getById=async function(req,res){
    let result=[];
    result=await sellerdal.getByIdSeller(req.params.id);
    res.send(result);

}
exports.removeById=async function(req,res){
    let result=[];
    result=await sellerdal.removeByIdSeller(req.params.id);
    res.send(result);

}