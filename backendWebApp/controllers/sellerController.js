
// import repoManager from "./dal.js";

export default class SellerController{
    //constructor Dependency Injection
    constructor(smgr){
        this.sellerManager=smgr;
        
    }

    get=async (req,res)=>{
        let result = await this.sellerManager.getAll();
        res.send(result);
        console.log(result);
    }

    getById=async(req,res)=>{
        let result = await this.sellerManager.getById(req.params.id);
        res.send(result);
        console.log(result);
    }

    post=async(req,res)=>{
        let result = await this.sellerManager.insert(req);
        res.send(result);
        console.log(result);
    }

    put=async(req,res)=>{
        let result = await this.sellerManager.update(req);
        res.send(result);
        console.log(result);
    }

    delete=async(req,res)=>{
        let result = await this.sellerManager.delete(req.params.id);
        res.send(result);
        console.log(result);
    }
}