var loginController=require('../controllers/loginController')
var userController= require('../controllers/userController')
//HTTP request mapping 



module.exports=function(app){
    app.route('/api/customer')
    .get(userController.getAll)
    .post(userController.insert)
    app.route('/api/login')
    .post(loginController.login)
    app.route('/api/logout')
    .get(loginController.logout)
    app.route('/api/customer/:id')
    // .delete(userController.remove)
    .patch(userController.patchById)
    .get(userController.getById)
}