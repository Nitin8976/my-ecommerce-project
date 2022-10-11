import CustomerManager from "../services/customerservice.js";
import CustomerController from "../controllers/customercontroller.js";

export default function(app){
let cmgr=new CustomerManager();// repo
let customercontroller=new CustomerController(cmgr); 
app.route('/api/customers')
.get(customercontroller.get)
.post(customercontroller.post)
.put(customercontroller.put)
app.route('/api/customers/:id')
 .delete(customercontroller.delete)
 .get(customercontroller.getById)
}