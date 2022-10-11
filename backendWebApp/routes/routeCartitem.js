import ShoppingCartController  from '../controllers/cart.js';
// import ShoppingCartController from "../controllers/shoppingcartcontroller.js";
//HTTP request mapping 


export default function(app){


     let cartcontroller=new ShoppingCartController();
    app.get("/api/cart",cartcontroller.getAllItems);
     app.post("/api/cart",cartcontroller.addItem);
     app.delete("/api/cart/:id",cartcontroller.removeItem)
     app.put("/api/cart/:id",cartcontroller.updateItem)
}