const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findAllEmployees() {
        return this.connection.query("SELECT * FROM employee_managementDB.employee")
    }
    findAllDepartments() {
        return this.connection.query("SELECT * FROM employee_managementDB.department")
    }
    findAllRoles() {
        return this.connection.query("SELECT * FROM employee_managementDB.role")
    }

}

module.exports = new DB(connection);

