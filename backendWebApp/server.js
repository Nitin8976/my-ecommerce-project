import express  from 'express';
import cors from 'cors' ;
 import session   from 'express-session' 
import routecustomerauth from './routes/routecustomerauth.js';
import routecustomer from './routes/routecustomer.js';
 import routeProduct from'./routes/routeProduct.js'
 import routeseller from './routes/routeSeller.js'
 import routesellerAuth from './routes/routesellerAuth.js';
// import routeorders from'./routes/routeorders.js'
//  import routeadmindashboard from'./routes/routeadmindashboard.js'
import routecartitem from './routes/routecartitem.js';




 const oneDay =  1000 * 60 * 60 * 24;
const app=express();
//middleewares
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay }
  }))

 routeseller(app);
routeProduct(app);
routecustomerauth(app);
routecustomer(app);
 routecartitem(app);
 routesellerAuth(app);
// routeorders(app)
// routeadmindashboard(app)

app.listen(3000,()=>{

    console.log("  listening  3000")
});