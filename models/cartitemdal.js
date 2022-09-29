const sql=require('./db')




exports.getAllcartitem=function(id){
    return new Promise(resolve=>{
    let cmd=`SELECT * FROM product WHERE product_id IN (SELECT product_id_fk2 FROM cart_item WHERE user_id_fk1= ${id})`    
    console.log(cmd);
    sql.query(cmd,(err, rows, fields)=>{
        resolve(rows);
    })
    

    })
}