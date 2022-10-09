
import cartitemController from "../controllers/cartitemController"
//HTTP request mapping 


export default function(app){
    let cartcontroller=new cartitemController();
    app.route('/api/postcartitem')
    .get(cartcontroller.postcartitem)
}