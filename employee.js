
const inquirer = require("inquirer");
const db = require("./db")
require("console.table")
// const connection = require("./connection");


const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employee_managementDB"
});

connection.connect(err => {
    if (err) throw err;
    start()
})

connection.query = util.promisify(connection.query)


    ;

function start() {
    inquirer
        .prompt({
            name: "homeDirectory",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role", "Add Department", "View All Departments"]
        })
        .then(answer => {
            switch (answer.homeDirectory) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
            }
        })
}

// async function viewAllEmployees() {
//     var query = await "SELECT * FROM employee_managementDB.employee";
//     console.log(connection.query(query))
// }

async function viewAllEmployees() {
    const employees = await db.findAllEmployees();
    console.table(employees)
    start();
};

async function viewAllDepartments() {
    const departments = await db.findAllDepartments();
    console.table(departments)
    start();
};

async function viewAllRoles() {
    const roles = await db.findAllRoles();
    console.table(roles)
    start();
};

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "employeeFirstName",
                type: "input",
                message: "What is the first name?"
            },
            {
                name: "employeeLastName",
                type: "input",
                message: "What is the last name?"
            },
            {
                name: "roleID",
                type: "input",
                message: "What is the role ID?"
            },
            {
                name: "managerID",
                type: "input",
                message: "What is the manager ID?"
            }

        ])
        .then(answer => {
            let sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
            connection.query(sql, [answer.employeeFirstName, answer.employeeLastName, answer.roleID, answer.managerID], (err, res) => {
                console.log("successful entry")
            })
        })
}

function addDepartment() {
    inquirer
        .prompt({
            name: "departmentName",
            type: "input",
            message: "What is the name of the department?"
        })
        .then(answer => {
            let sql = "INSERT INTO department (department_name) VALUES (?)";
            connection.query(sql, answer.departmentName, (err, res) => {
                console.log(`successful entry of department ${answer.departmentName}!`)
            })
        })
}

function addRole() {
    inquirer
        .prompt([
            {
                name: "roleTitle",
                type: "input",
                message: "What is the title of the role?"
            },
            {
                name: "roleSalary",
                type: "input",
                message: "What is the salary of the role?"
            },
            {
                name: "roleDepartment",
                type: "input",
                message: "What is the department of the role?"
            }
        ])
        .then(answer => {
            let sql = "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)";
            connection.query(sql, [answer.roleTitle, answer.roleSalary, answer.roleDepartment], (err, res) => {
                console.log(`successful entry of the role "${answer.roleTitle}!"`)
            })
        })

}

