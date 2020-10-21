const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findAllEmployees() {
        return this.connection.query("SELECT * FROM employee_managementDB.employee")
        // return this.connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary FROM employee INNER JOIN role WHERE employee.role_id = role.id")
    }
    findAllDepartments() {
        return this.connection.query("SELECT * FROM employee_managementDB.department")
    }
    findAllRoles() {
        return this.connection.query("SELECT * FROM employee_managementDB.role")
        // return this.connection.query("SELECT department.department_name, role.title, role.salary FROM department INNER JOIN role WHERE department.id=role.department_id")
    }

}

module.exports = new DB(connection);


