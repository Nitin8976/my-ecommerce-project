
//Javascript Code
//Client Side Javascript Code

var fetchData=()=>{
    // alert("button is clicked.....");
     let url="http://localhost:8000/api/products";
     //use Ajax mechanism to fetch data from  rest api
     //it is inbuilt function of jQuery Library
     $.ajax({
         dataType: "json",
         url: url,
         type:"GET",
         success: (data)=>{
             console.log(data);
             let strData=JSON.stringify(data)
             //alert(strData);
            /* let para1=document.getElementById("para");
             para1.innerHTML=strData;
             */
             //DOM tree Manipulation Code at Client Side
             let productList=document.getElementById("productList");
             for(var i=0;i<data.length;i++){
                 const node = document.createElement("li");
                 const textnode = document.createTextNode(data[i].title);
                 node.appendChild(textnode);
                 productList.appendChild(node);
             }  
         }
       });
     //on receive data dynamically append products names to existing HTML page
     //DOM Manipulation
     console.log("Button is Clicked......");
 }
 
 var onLogin=()=>{
     let email=document.getElementById("email").value;
     let password=document.getElementById("password").value;
     let credential={};
     credential.email=email;
     credential.password=password;
     let loginUrl="http://localhost:3000/api/customer/login";
     $.ajax({
         url: loginUrl,
         type:"POST",
         data:credential,
         success: (data, status)=>{
             console.log("on successfull login");
             console.log(status);
             console.log(data);
             localStorage.setItem("receivedtoken",data);  //browsers cache memory
             location.replace("orders.html")

            }
     });
 }
 
 var fetchOrders=()=>{
     let apiError;
     let result;
     let token= localStorage.getItem("receivedtoken");
     console.log(token);
     fetch("//localhost:3000/api/orders", {
         headers: {
           "Content-Type": "application/json",
           "Authorization":token
         }
       })
         .then(async response => {
           if (response.ok) {
             apiError = false;
             result = await response.json();
             console.log(result);
             let ordersList=document.getElementById("lstOrders");
             for(var i=0;i<result.length;i++){
                 const node = document.createElement("li");
                 const textnode = document.createTextNode(result[i].orderid+" " +result[i].orderdate  +" " +result[i].status );
                 node.appendChild(textnode);
                 ordersList.appendChild(node);
                 
             }  
           } else {
             apiError = true;
           }
         })
         .catch(() => (apiError = true));
 }

 var changePassword=()=>{
location.replace("changepassword.html")

 }


var changepasswordSuccess=()=>{
  var email = document.getElementById("emailc").value
  var oldP=document.getElementById("oldp").value;
  var newP=document.getElementById("newp").value;
  var confirmP =document.getElementById("confirmp").value;
  let updateUrl="http://localhost:3000/api/customer/updatepassword";
  let credential={};
  credential.email=email;
  credential.password=oldP;
  credential.confirmpassword=confirmP;

  if(oldP!=""&&newP!=""&&confirmP!="")
  {
    if(oldP!=newP)
    {
      if(newP==confirmP)
       {
        $.ajax({
          url: updateUrl,
          type:"PUT",
          data:credential,
          success: (data, status)=>{
              console.log("on successfull update");
              console.log(status);
              console.log(data);
              if(status=="success"){
                location.replace("passwordchanged.html")
              }
            }
            })
       }
       else
        {
          alert("Confirm password is not same as you new password.");
          return false;
        }
    }
    else
   {
    alert(" This Is Your Old Password,Please Provide A New Password");
    return false;
   }
  }
  else
  {
   alert("All Fields Are Required");
   return false;
  }
}


var onsubmitcustomer=()=>{
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  let firstname=document.getElementById("firstname").value;
  let lastname=document.getElementById("lastname").value;
  let address=document.getElementById("address").value;
  let contactnumber=document.getElementById("contactnumber").value; 
  let role = document.getElementById("role");
  let location=document.getElementById("location").value;
  let index=role.selectedIndex;
  let selectedrole = role.options[index].text;
  console.log(selectedrole)
    let credential={};
  credential.email=email;
  credential.password=password;
  credential.firstname=firstname;
  credential.lastname=lastname;
  credential.address=address;
  credential.contactnumber=contactnumber;
  credential.location=location;
  if(selectedrole !== "customer"){
  
  alert("please select customer role:");
  }

  else{
    credential.role=selectedrole;
  console.log(credential);
  let customerRegUrl="http://localhost:3000/api/customers";
  $.ajax({
      url: customerRegUrl,
      type:"POST",
      data:credential,
      success: (data, status)=>{
          console.log("on successfull register");
          console.log(status);
          console.log(data);
          // localStorage.setItem("receivedtoken",data);  //browsers cache memory
          location.replace("login.html")

         }
  });

  }
  
 
}
