CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(10) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price,stock_quantity)
 	VALUES ("skirt", "womens", 90, 30),("jacket", "womens", 90, 10)"Dress", "womens", 30, 15), ("Polo", "mens", 35, 15), ("Polo", "mens", 35, 15), ("cargo shorts", "mens", 40, 30), ("jeans", "childrens", 75, 20), ("blazer" ,"childrens", 45, 20), ("uniform","childrens", 10, 90), ("boots", "shoes", 80, 12);