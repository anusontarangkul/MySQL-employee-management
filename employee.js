const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employee_managementDB"
});

connection.connect(err => {
    if (err) throw err;
    start();

});

function start() {
    inquirer
        .prompt({
            name: "homeDirectory",
            type: "list",
            message: "What would you like to do?",
            choices: ["Add departments, roles, employees", "View departments, roles, employees", "Update employee roles"]
        })
        .then(answer => {
            switch (answer.homeDirectory) {
                case "Add departments, roles, employees":
                    addToTable();
                    break;
            }
        })
}

function addToTable() { };