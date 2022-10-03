const userdal=require('../models/daldashboard/customersdashdal')


exports.getAll=async function(req,res){
    let result=[];
    result=await userdal.getAllProducts();
    res.send(result);

}





