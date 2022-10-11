import CustomerAuthManager from "../services/customerAuthservice.js";
import CustomerAuthController from "../controllers/customerauthcontroller.js";


export default function(app){
    let cauthmgr=new CustomerAuthManager();// repo
    let customerauthcontroller=new CustomerAuthController(cauthmgr); 


  
    app.route('/api/customer/login')
    .post(customerauthcontroller.login)
    app.route('/api/logout')
    .get(customerauthcontroller.logout)
    // app.route('/api/customer/updatepassword')
    // // .delete(sellerController.remove)
    //  .put(customerauthcontroller.updatepassword)
}