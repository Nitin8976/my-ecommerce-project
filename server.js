const express= require('express');
const routeseller=require('./routes/routeSeller')
const routecustomer=require('./routes/routecustomer')
 const routeProduct=require('./routes/routeProduct')
//  const routelogin=require('./routes/routeLogin')
 const routeadmindashboard=require('./routes/routeadmindashboard')
 const oneDay = 1000 * 60 * 60 * 24;
 var session = require('express-session')
const app=express();

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
routecustomer(app);
// routelogin(app);
routeadmindashboard(app)

app.listen(7000,()=>{

    console.log("  listening  7000")
});