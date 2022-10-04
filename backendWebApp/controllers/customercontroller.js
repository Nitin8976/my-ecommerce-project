const customerdal=require('../models/customerdal')


exports.getAll=async function(req,res){
    let result=[];
    result=await customerdal.getAllCustomer();
    res.send(result);

}





