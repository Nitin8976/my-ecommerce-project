import CustomerLoginManager from "../models/customerloginauthdal.js"
import CustomerLoginAuthController from "../controllers/customerloginauth.js"


export default function(app){
    let cauthmgr=new CustomerLoginManager();// repo
    let customerlogincontroller=new CustomerLoginAuthController(cauthmgr); 


  
    app.route('/api/customer/login')
    .post(customerlogincontroller.login)
    app.route('/api/logout')
    .get(customerlogincontroller.logout)
    app.route('/api/customer/updatepassword')
    // .delete(sellerController.remove)
     .put(customerlogincontroller.updatepassword)
}