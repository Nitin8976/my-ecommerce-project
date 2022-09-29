
const sql=require('./db')


exports.loginUser=function(req,res){
    return new Promise(resolve=>{
        let username = req.body.email;
        let password = req.body.password;
        
        // Ensure the input fields exists and are not empty
        if (username && password) {
            console.log(username);
            // Execute SQL query that'll select the account from the database based on the specified username and password
            let cmd=`SELECT * from customer WHERE email='${username}' and password='${password}' `
        sql.query(cmd,(err,rows,fields)=> {
                if (err) throw err;
                // If the account exists
                if (rows.length > 0) {
                    // Redirect to home page
    
                    resolve(rows);
                
                } else {
                    resolve('Incorrect Username or Password!');
                }			
            });
        } else {
            resolve('Please enter Username and Password!');
        }
    });
    
}

exports.logoutUser= function (req, res) {

   return new Promise(resolve=>{
     req.session.destroy();
    resolve('success', 'Login Again Here');
   })
  }