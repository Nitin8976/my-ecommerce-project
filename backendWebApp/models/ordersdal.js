

export default class  OrderManeger{


placeOrder = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let orderDataValues = "";
      let productQuantityUpdateQuery = "";
      let amount = 0;
      for (let i = 0; i < data.products.length; i++) {
        let productId = data.products[i].id;
        let productPrice = data.products[i].unitprice;
        let productQuantity = data.products[i].quantity;

        amount += productPrice * productQuantity;

        orderDataValues += `( ${productQuantity},@orderid, ${productId}),`;
        productQuantityUpdateQuery += `UPDATE products SET quantity = quantity - ${productQuantity} WHERE id = ${productId};`;
      }
      orderDataValues = orderDataValues.slice(0, -1);
      let payableAmount = amount * (1 - data.discount_percentage);
      let command = `INSERT INTO orders (orderid,orderdate,status, totalamount,customersid) VALUES (@oredrid, "${timeStamp}","placed", ${productPrice},${data.customer_id});
      SET @order_id = LAST_INSERT_ID();
      INSERT INTO ordeerdetail (quanity ,orderid, productid) VALUES ${orderDataValues};
      ${productQuantityUpdateQuery}
      INSERT INTO payments (amount,paymentmode, orderid_fk0, transactionid) VALUES (${payableAmount}, "${data.payment_mode}", @order_id, 1);`;

      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log(err);
          resolve({ error: "Unable to place order." });
        } else {
          resolve({ message: "Inserted!" });
        }
      });
    });
  };
}