
const logindal=require('../models/logindal')

exports.login= async function(req,res){
    let result=[];
    result=await logindal.loginUser(req);
    console.log(result);
    // res.send(result);
    if(req.session.loggedin){
    console.log(`/api/cartitem/${result.map(result=>result.user_id)}`)
    res.redirect(`/api/cartitem/${result.map(result=>result.user_id)}`)
    }
    else{
        res.send("something went worng")
    }

}
exports.logout= async function(req,res){
    let result=[];
    result=await logindal.logoutUser(req);
    console.log(result);
    res.send(result);
//     res.redirect('/api/login');
}