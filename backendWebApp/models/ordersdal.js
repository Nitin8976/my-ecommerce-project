const sql=require('./db')




exports.getAllOrders=function(req,res){
    return new Promise(resolve=>{
    let command="SELECT * FROM orders";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
    
exports.insertOrders=(req, res) =>{
    return new Promise(resolve=>{
    console.log(req.session.sellerID)
    var cmd = `insert into orderss(title,description,quantity,unitprice,category,sellerid) values('${req.title}', '${req.description}','${req.quantity}' ,'${req.unitprice}','${req.category}',${req.session.sellerID})`;
   
   
   console.log(cmd);
  sql.query(cmd,(err,rows,fields)=> {
if(err){
    console.log(err);
}
else{
        console.log(rows);
      
      resolve(rows);
}
    })
      
})
}



exports.getByIdOrders=function(id){
    return new Promise(resolve=>{
    let command="SELECT * FROM product WHERE ordersid=" +id;
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
// exports.remove=function(id){
//     let cmd="DLETE from tasks where takid="+id;
//     sql.query(cmd,(err, rows, fields)=>{
//         console.log(rows);
//     })
// }


