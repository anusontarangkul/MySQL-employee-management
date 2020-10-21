
const inquirer = require("inquirer");
const db = require("./db")
require("console.table")


start();

function start() {
    inquirer
        .prompt({
            name: "homeDirectory",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role"]
        })
        .then(answer => {
            switch (answer.homeDirectory) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
            }
        })
}

async function viewAllEmployees() {
    const employees = await db.findAllEmployees();
    console.table(employees)
};
