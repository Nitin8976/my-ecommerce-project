
var loginController= require('../controllers/loginController')
//HTTP request mapping 



module.exports=function(app){
    app.route('/api/userlogin')
    
    .post(loginController.login)
}