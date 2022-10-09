import ProductManager from "../models/productdal.js"
import ProductController from "../controllers/productController.js";

//HTTP request mapping 

export default function(app){
    let productmgr=new ProductManager();// repo
    let productcontroller=new ProductController(productmgr); 
    app.route('/api/products')
    .get(productcontroller.getAll)
    // .post(productcontroller.insert)
   
    // // .delete(userController.remove)
    // // .put(userController.update)
    // .get(productController.getById)
}



