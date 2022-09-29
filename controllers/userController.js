const userdal=require('../models/userdal')

exports.insert=async function(req,res){
    let result=[];
    result=await userdal.insertUser(req);
    res.send(result);

}

exports.getAll=async function(req,res){
    let result=[];
    result=await userdal.getAllUser();
    res.send(result);

}


exports.getById=async function(req,res){
    let result=[];
    result=await userdal.getByIdUser(req.params.id);
    res.send(result);

}

exports.patchById=async function(req,res){
    let result=[];
    result=await userdal.patchByIdUserUpdate(req.params.id);
    res.send(result);

}

