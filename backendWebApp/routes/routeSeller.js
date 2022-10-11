import SellerManager from "../services/sellerservice.js";
import SellerController from "../controllers/sellerController.js";




export default function(app){
let smgr=new SellerManager();// repo
let sellercontroller=new SellerController(smgr); 
app.route('/api/sellers')
.get(sellercontroller.get)
.post(sellercontroller.post)
.put(sellercontroller.put)
app.route('/api/sellers/:id')
 .delete(sellercontroller.delete)
 .get(sellercontroller.getById)
}