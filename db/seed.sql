 id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name DECIMAL,
  role_id INT,
  manager_id INT,

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Jones", 25, 13)