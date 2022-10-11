import sql from '../services/db.js'



export default class ProductManager{
    constructor(){}
 getAllProducts=(req,res)=>{
    return new Promise(resolve=>{
    let command="SELECT * FROM products";
    console.log(command);
    sql.query(command,(err, rows, fields)=>{
        resolve(rows);
    })
});
}
}
// .


// exports.remove=function(id){
//     let cmd="DLETE from tasks where takid="+id;
//     sql.query(cmd,(err, rows, fields)=>{
//         console.log(rows);
//     })
// }


