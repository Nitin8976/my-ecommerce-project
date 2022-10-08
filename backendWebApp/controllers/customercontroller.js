
// import repoManager from "./dal.js";

export default class CustomerController{
    //constructor Dependency Injection
    constructor(mgr){
        this.customerManager=mgr;
        
    }

    get=async (req,res)=>{
        let result = await this.customerManager.getAll();
        res.send(result);
        console.log(result);
    }

    getById=async(req,res)=>{
        let result = await this.customerManager.getById(req.params.id);
        res.send(result);
        console.log(result);
    }

    post=async(req,res)=>{
        let result = await this.customerManager.insert(req);
        res.send(result);
        console.log(result);
    }

    put=async(req,res)=>{
        let result = await this.customerManager.update(req);
        res.send(result);
        console.log(result);
    }

    delete=async(req,res)=>{
        let result = await this.customerManager.delete(req.params.id);
        res.send(result);
        console.log(result);
    }
}