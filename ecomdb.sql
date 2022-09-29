
--all users table

CREATE TABLE `ecom`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NULL,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `adress` VARCHAR(45) NULL,
  `contactnumber` VARCHAR(45) NULL,
  `role` VARCHAR(45) NULL,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE,
  UNIQUE INDEX `contactnumber_UNIQUE` (`contactnumber` ASC) VISIBLE);

--seller TABLE


CREATE TABLE `ecom`.`sellers` (
  `seller_id` INT NOT NULL AUTO_INCREMENT,
  `gstin` VARCHAR(45) NULL,
  `userid` INT NULL,
  PRIMARY KEY (`seller_id`),
  UNIQUE INDEX `gstin_UNIQUE` (`gstin` ASC) VISIBLE,
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `userid`
    FOREIGN KEY (`userid`)
    REFERENCES `ecom`.`users` (`userid`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);


-- shippingvendor TABLE
CREATE TABLE `ecom`.`shippingvendors` (
  `shippingvendorsid` INT NOT NULL AUTO_INCREMENT,
  `userid_fk1` INT NULL,
  `govtidnumber` INT NOT NULL,
  PRIMARY KEY (`shippingvendorsid`),
  INDEX `userid_fk1_idx` (`userid_fk1` ASC) VISIBLE,
  UNIQUE INDEX `govtidnumber_UNIQUE` (`govtidnumber` ASC) VISIBLE,
  CONSTRAINT `userid_fk1`
    FOREIGN KEY (`userid_fk1`)
    REFERENCES `ecom`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- product table
CREATE TABLE `ecom`.`products` (
  `productid` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `quantity` VARCHAR(45) NULL,
  `unitprice` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `sellerid` INT NULL,
  PRIMARY KEY (`productid`),
  INDEX `sellerid_idx` (`sellerid` ASC) VISIBLE,
  CONSTRAINT `sellerid`
    FOREIGN KEY (`sellerid`)
    REFERENCES `ecom`.`sellers` (`seller_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);


-- order table
CREATE TABLE `ecom`.`orders` (
  `orderid` INT NOT NULL AUTO_INCREMENT,
  `orderdate` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `totalamount` BIGINT NULL,
  `userid_fk2` INT NULL,
  PRIMARY KEY (`orderid`),
  INDEX `userid_fk2_idx` (`userid_fk2` ASC) VISIBLE,
  CONSTRAINT `userid_fk2`
    FOREIGN KEY (`userid_fk2`)
    REFERENCES `ecom`.`users` (`userid`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);

-- orderDetail
CREATE TABLE `ecom`.`orderdetail` (
  `orderdetailid` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `orderid` INT NULL,
  `productid` INT NULL,
  PRIMARY KEY (`orderdetailid`),
  INDEX `orderid_idx` (`orderid` ASC) VISIBLE,
  INDEX `productid_idx` (`productid` ASC) VISIBLE,
  CONSTRAINT `orderid`
    FOREIGN KEY (`orderid`)
    REFERENCES `ecom`.`orders` (`orderid`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `productid`
    FOREIGN KEY (`productid`)
    REFERENCES `ecom`.`products` (`productid`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);

-- payment detail
CREATE TABLE `ecom`.`payments` (
  `paymentid` INT NOT NULL AUTO_INCREMENT,
  `paymentdate` VARCHAR(45) NULL,
  `paymentmode` VARCHAR(45) NULL,
  `amount` BIGINT NULL,
  `transactionid` VARCHAR(45) NULL,
  `orderid_fk` INT NULL,
  PRIMARY KEY (`paymentid`),
  INDEX `orderid_fk_idx` (`orderid_fk` ASC) VISIBLE,
  CONSTRAINT `orderid_fk`
    FOREIGN KEY (`orderid_fk`)
    REFERENCES `ecom`.`orders` (`orderid`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);





