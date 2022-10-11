import SellerAuthManager from "../services/sellerauthservice.js";
import SellerAuthController from "../controllers/sellerlauthcontroller.js";

export default function(app){
    let sauthmgr=new SellerAuthManager();// repo
    let sellerauthcontroller=new SellerAuthController(sauthmgr); 


  
    app.route('/api/seller/login')
    .post(sellerauthcontroller.login)
    app.route('/api/seller/logout')
    .get(sellerauthcontroller.logout)
    // app.route('/api/customer/updatepassword')
    // // .delete(sellerController.remove)
    //  .put(customerauthcontroller.updatepassword)
}