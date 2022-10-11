export default class Seller {
    //Parameterized constructor
    constructor(

      userid,
      firstname,
      lastname,
      address,
      contactnumber,
      role,
      gstin
    ) {
      this.userid = userid;
      this.firstname = firstname;
      this.lastname = lastname;
      this.address = address;
      this.contactnumber = contactnumber;
      this.role = role ;
      this.gstin= gstin ;

      this.table_name = "users";
      this.table_name = "seller";
    }
  
    display() {
      console.log(`UserId= ${this.userid}`);
      console.log(`First Name= ${this.firstname}`);
      console.log(`Last Name= ${this.lastname}`);
      console.log(`Address = ${this.address}`)
      console.log(`Mobile= ${this.contactnumber}`);
      console.log(`Role= ${this.role}`);
      console.log (`Location = ${this.gstin}`)
    }
  }