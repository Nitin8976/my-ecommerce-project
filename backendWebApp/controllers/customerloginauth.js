
import jwt  from 'jsonwebtoken';


export default class CustomerLoginAuthController{

constructor(cauthmgr){
    this.customerLoginManager = cauthmgr;
}

l-++++++++---+---
logout= async (req,res)=>{
    let result=[];
    result=await this.customerLoginManager.logoutUser(req);
    console.log(result);
    res.send(result);
//     res.redirect('/api/login');
}

updatepassword=async (req,res)=>{
    let result=[];
    result=await this.customerLoginManager.updateBypassword(req);
    console.log(result);
    res.send("password update successful")}

}

