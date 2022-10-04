var admindaldashb= require('../../models/daldashboard/admindaldashboard')

exports.allProduct= async function(req,res){
    let result=[];
    result=await admindaldashb.getAllProduct();
    console.log(result);
    res.send(result);
}

exports.allCustomers= async function(req,res){
    let result=[];
    result=await admindaldashb.getAllCustomers();
    console.log(result);
    res.send(result);
}

exports.allSellers= async function(req,res){
    let result=[];
    result=await admindaldashb.getAllSellers();
    console.log(result);
    res.send(result);
}

exports.allShippingvendors= async function(req,res){
    let result=[];
    result=await admindaldashb.getAllShippinhgvendors();
    console.log(result);
    res.send(result);
}

exports.roleByEmail= async function(req,res){
    let result=[];
    result=await admindaldashb.getUsersRoleByEmail(req);
    console.log(result);
    res.send(result);
}

exports.infoByEmail= async function(req,res){
    let result=[];
    result=await admindaldashb.getUserInfoByEmail(req);
    console.log(result);
    res.send(result);
}

exports.minPriceProduct= async function(req,res){
    let result=[];
    result=await admindaldashb.getProductMinPrice();
    console.log(result);
    res.send(result);
}

exports.maxPriceProduct= async function(req,res){
    let result=[];
    result=await admindaldashb.getProductMaxPrice();
    console.log(result);
    res.send(result);
}

exports.topTenproduct= async function(req,res){
    let result=[];
    result=await admindaldashb.getTopTenProduct();
    console.log(result);
    res.send(result);
}

exports.topTenCustomers= async function(req,res){
    let result=[];
    result=await admindaldashb.getTopTenCustomers();
    console.log(result);
    res.send(result);
}
exports.topTenSellers= async function(req,res){
    let result=[];
    result=await admindaldashb.getTopTenSellers();
    console.log(result);
    res.send(result);
}
exports.topTenShippingvendors= async function(req,res){
    let result=[];
    result=await admindaldashb.getTopTenShippingvendors();
    console.log(result);
    res.send(result);
}

exports.getCustomerSameAddress= async function(req,res){
    let result=[];
    result=await admindaldashb.getCustomerFromSameAddress();
    console.log(result);
    res.send(result);
}