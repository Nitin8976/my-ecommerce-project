export default class CustomerAuth {
    //Parameterized constructor
    constructor(

      userid,
      password,
      role
    ) {
      this.userid = userid;
      this.password = password;
      this.role = role ;
  
      this.table_name = "users";
    }
  
    display() {
      console.log(`UserId= ${this.userid}`);
      console.log(`Password= ${this.password}`);
      console.log(`Role= ${this.role}`);
    }
  }