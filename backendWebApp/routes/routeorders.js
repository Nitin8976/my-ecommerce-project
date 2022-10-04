
var ordersController=require('../controllers/ordersController');

//HTTP request mapping 

module.exports=function(app){
    app.route('/api/orders')
    .get(ordersController.getAll)
    .post(ordersController.insert)
    app.route('/api/orders/:id')
    // // .delete(userController.remove)
    // // .put(userController.update)
    .get(ordersController.getById)
}



