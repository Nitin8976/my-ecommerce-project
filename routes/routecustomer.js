var loginController=require('../controllers/dasboards/customerdashboard')
var userController= require('../controllers/userController')

var productController=require('../controllers/productController');
//HTTP request mapping 



module.exports=function(app){
    app.route('/api/products')
    .get(productController.getAll)
    app.route('/api/customer/login')
    .post(loginController.login)
    app.route('/api/logout')
    .get(loginController.logout)
    // app.route('/api/customer/:id')
    // // .delete(userController.remove
    // .get(userController.getById)
}