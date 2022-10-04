const sql = require('../db');



exports.getAllProduct=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM product";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
    


exports.getAllCustomers=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM customers";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
    





exports.getAllSellers=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM sellers";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
    


exports.getAllShippinhgvendors=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM shippingvendors";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}





exports.getUsersRoleByEmail=function(req,res){
    return new Promise(resolve=>{
        let email = req.body.email;
    let command=`SELECT role FROM users where email='${email}' `;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}




exports.getUserInfoByEmail=function(req,res){
    return new Promise(resolve=>{
        let email = req.body.email
    let command=`SELECT * FROM users where email='${email}'`
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
    
    


exports.getProductMinPrice=function(){
    return new Promise(resolve=>{
    let command="SELECT MIN(Price) AS SmallestPrice FROM products";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
   


exports.getProductMaxPrice=function(){
    return new Promise(resolve=>{
    let command="SELECT MAX(Price) AS largestPrice FROM products";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}



exports.getTopTenProduct=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM products LIMIT 10";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}






exports.getTopTenCustomers=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM customers LIMIT 10";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
exports.getTopTenSellers=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM sellers LIMIT 10";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}

    
exports.getTopTenShippingvendors=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM shippingvendors LIMIT 10";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}




exports.getCustomerFromSameAddress=function(){
    return new Promise(resolve=>{
    let command=`SELECT * FROM customers WHERE deliveryaddress=${deliveryaddress}  LIMIT 50`;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
