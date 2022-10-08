import CustomerLoginManager from "../models/customerloginauthdal.js"
import CustomerLoginAuthController from "../controllers/customerloginauth.js"


export default function(app){
    let cauthmgr=new CustomerLoginManager();// repo
    let customercontroller=new CustomerLoginAuthController(cauthmgr); 


  
    app.route('/api/customer/login')
    .post(customercontroller.login)
    app.route('/api/logout')
    .get(customercontroller.logout)
    app.route('/api/customer/updatepassword')
    // .delete(sellerController.remove)
     .put(customercontroller.updatepassword)
}