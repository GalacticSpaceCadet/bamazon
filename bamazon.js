// listing the dependencies required to run app
var mysql = require("mysql");

var inquirer = require("inquirer");

var consoletable = require("console.table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password:"root",
	database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
});
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  console.table(res);
});



var selectItem = function() {
	 inquirer.prompt([

        {
            name: "item_id",
            type: "input",
            message: "What would you like to buy?(Please use item_id)"
        }, {
            name: 'Quantity',
            type: 'input',
            message: "What quantity would you like?"
        },

    ]).then(function(answers) {
        //capture the variables then figure out how to update table
        var chosenID= answers.item_id;
        var amountWanted = answers.quantity;
        availability(chosenID, amountWanted);
    });
}   

/*var availability = function(){
            connection.query("SELECT item_id FROM products WHERE ?", { item_id: answer.item_id }, function(err, res) {
                console.log("Selected Item " + chosenID + ".");
                console.log("Selected Quantity" + " " + amountWanted + ".");

                connection.query("SELECT stock_quantity FROM products WHERE ?", { item_id: answer.item_id }, function(err, res) {
                    var amount = parseInt(res[0].stock_quantity) - parseInt(answer.quantity);
                    // console.log(parseInt(amount));

          }   */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     