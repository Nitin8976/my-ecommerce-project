
const sellerlogindal=require('../models/sellerlogindal')

exports.login= async function(req,res){
    let result=[];
    result=await sellerlogindal.loginSeller(req);
    console.log(result);
    res.send(result);
    // console.log(`/api/cartitem/${result.map(result=>result.user_id)}`)
    // res.redirect(`/api/cartitem/${result.map(result=>result.user_id)}`)
    

}
exports.logout= async function(req,res){
    let result=[];
    result=await sellerlogindal.logoutSeller(req);
    console.log(result);
    res.send(result);
    res.redirect('/api/sellerlogin');
}