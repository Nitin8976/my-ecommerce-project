


export default class ProductController{
constructor(productmgr){
    this.productmgr=productmgr;


}


getAll=async (req,res)=>{
    let result=[];
    result=await this.productmgr.getAllProducts();
    res.send(result);
}
}
// exports.getById=async function(req,res){
//     let result=[];
//     result=await productdal.getByIdProduct(req.params.id);
//     res.send(result);

// }
// exports.insert=async function(req,res){
//     let result=[];
//     result=await productdal.insertProduct(req);
//     res.send(result);

// }
