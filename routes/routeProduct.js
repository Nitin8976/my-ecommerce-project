
var productController=require('../controllers/productController');

//HTTP request mapping 

module.exports=function(app){
    app.route('/api/product')
    .get(productController.getAll)
    .post(productController.insert)
    app.route('/api/product/:id')
    // // .delete(userController.remove)
    // // .put(userController.update)
    .get(productController.getById)
}
