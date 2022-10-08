import express  from 'express';
// import routeseller from './routes/routeSeller.js'
import routecustomerloginauth from './routes/routecustomerloginauth.js';
//  import routeProduct from'./routes/routeProduct.js'
// import routeorders from'./routes/routeorders.js'
//  import routeadmindashboard from'./routes/routeadmindashboard.js'
 import cors from 'cors' ;
 import session   from 'express-session' 



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

// routeseller(app);
// routeProduct(app);
routecustomerloginauth(app);
// routeorders(app)
// routeadmindashboard(app)

app.listen(3000,()=>{

    console.log("  listening  3000")
});