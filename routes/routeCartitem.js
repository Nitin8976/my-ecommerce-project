
var cartitemController= require('../controllers/cartitemController')
//HTTP request mapping 



module.exports=function(app){
    app.route('/api/cartitem/:id')
    .get(cartitemController.cartitem)
}