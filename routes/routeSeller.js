
var sellerController=require('../controllers/sellerController');
var sellerloginController=require('../controllers/sellerloginController')
//HTTP request mapping 

module.exports=function(app){
    app.route('/api/seller')
    .get(sellerController.getAll)
    .post(sellerController.insert)
    app.route('/api/seller/:id')
    // .delete(sellerController.remove)
    // .put(userController.update)
    .get(sellerController.getById)
    app.route('/api/sellerlogin')
    .post(sellerloginController.login)
    app.route('/api/sellerlogout')
    .get(sellerloginController.logout)
}
