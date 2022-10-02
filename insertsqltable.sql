use ecom;
show tables;
    select * from products;
	select * from customers;
    select * from payments;
    select * from  orderdetail;
    select * from orders;
    select * from   sellers;
    select * from products where productid=1;
    

	insert into users(email,password,firstname,lastname,adress,contactnumber,role)values("bilaspur@12","YNR123","amit","kumar","bilaspur",8933000561,"customer");
	insert into users(email,password,firstname,lastname,adress,contactnumber,role)values("pur@12","R123","aman","kumar","pur",8933000591,"seller");
	insert into users(email,password,firstname,lastname,adress,contactnumber,role)values("puri@124","Ri123","naman","kumar","ynr",8933005591,"vendor");
    insert into sellers(gstin,userid)values(123456,2);
    insert into orderdetail(quantity,orderid,productid)values(45,1,1);
    insert into orders(orderdate,status,totalamount,userid_fk2)values("11/12/22","pending",300,1);
	insert into payments(paymentdate,paymentmode,amount,transactionid,orderid_fk)values("11\11\22","cash",10000,"65gty78",1);
    insert into products(title,description,quantity,unitprice,category,sellerid) values("iphone", "apple series",9 , "10000","apple",1);
	insert into shippingvendors(userid_fk1,govtidnumber)values(3,45043);
    insert into customers(billingaddress,deliveryaddress,userid_fk)values("YNR","ynr302","1");
    
