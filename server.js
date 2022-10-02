const express= require('express');
const routeseller=require('./routes/routeSeller')
const routeuser=require('./routes/routeUser')
 const routeProduct=require('./routes/routeProduct')
 const routelogin=require('./routes/routeCartitem')
 const routeadmindashboard=require('./routes/routeadmindashboard')
 var session = require('express-session')
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

routeseller(app);
routeProduct(app);
routeuser(app);
routelogin(app);
routeadmindashboard(app)

app.listen(7000,()=>{

    console.log("  listening  7000")
});