const express= require('express');
const routeseller=require('./routes/routeSeller')
const routecustomer=require('./routes/routecustomer')
 const routeProduct=require('./routes/routeProduct')
const routeorders=require('./routes/routeorders')
 const routeadmindashboard=require('./routes/routeadmindashboard')
 const cors=require('cors');
 const oneDay = 1000 * 60 * 60 * 24;
 const session = require('express-session')




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
routecustomer(app);
routeorders(app)
routeadmindashboard(app)

app.listen(3000,()=>{

    console.log("  listening  3000")
});