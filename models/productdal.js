const sql=require('./db')




exports.getAllProduct=function(){
    return new Promise(resolve=>{
    let command="SELECT * FROM product";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
    
exports.insertProduct=(req, res) =>{
    return new Promise(resolve=>{
    
    var cmd = `INSERT INTO seller(product_name,product_desc,product_price,product_stock,product_mnf,seller_id) values('${req.body.product_name}','${req.body.product_desc}',${req.body.product_price},'${req.body.product_stock}','${req.body.product_mnf}',${req.body.seller_id})`
   
   
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



exports.getByIdProduct=function(id){
    return new Promise(resolve=>{
    let command="SELECT * FROM product WHERE product_id=" +id;
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


