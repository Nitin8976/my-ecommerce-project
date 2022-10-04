var loginController=require('../controllers/dasboards/customerdashboard')
var customerController= require('../controllers/customercontroller')

//var productController=require('../controllers/productController');
//HTTP request mapping 



module.exports=function(app){
    app.route('/api/customers')
    .get(customerController.getAll)
    app.route('/api/customer/login')
    .post(loginController.login)
    app.route('/api/logout')
    .get(loginController.logout)
    // app.route('/api/customer/:id')
    // // .delete(userController.remove
    // .get(userController.getById)
}