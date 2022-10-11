import sql from './db.js'
import Customer from '../models/customermodel.js'


export  default class CustomerManager{
    constructor(){
        this.model = new Customer();
        
    }
    
    
    insert=(req,res)=>{
        return new Promise(resolve=>{
    
            var cmd = `call InsertCustomer('${req.body.email}','${req.body.password}','${req.body.firstname}','${req.body.lastname}','${req.body.address}',${req.body.contactnumber},'${req.body.role}','${req.body.location}')`
           
           
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

    update=(req,res)=>{
        return new Promise(resolve=>{
            let command=`UPDATE users set email='${req.body.email}' WHERE password='${req.body.password}'`;
            console.log(command);
            sql.query(command,(err, rows, fields)=>{
                resolve(rows);
            })
        });
    }

    getAll(){
    return new Promise(resolve=>{
        let command=    `SELECT * FROM users where role='customer'`;
        console.log(command);
        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
    });
    }

    getById=(id)=>{
       
        return new Promise(resolve=>{
  
        //     fsModule.readFile(fileName,(err,data)=>{
        //         var Data=data.toString();
        //         var allUsers=JSON.parse(Data);
        //         var foundUser={};
        //   foundUser= allUsers.find((user)=>(user.id == id))
        //   console.log("by id");
        //   console.log(foundUser);
        //         resolve(foundUser);
               
        //     })
            let command=`select * FROM users WHERE userid=${id}`;
            console.log(command);
            sql.query(command,(err, rows, fields)=>{
                resolve(rows);
            })
        });
        
}

    delete=(id)=>{   
        return new Promise(resolve=>{
            let command=`DELETE FROM users WHERE userid=${id}`;
            console.log(command);
            sql.query(command,(err, rows, fields)=>{
                resolve(rows);
            })
        });
    }
}


