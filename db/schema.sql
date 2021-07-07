 //-----

 CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    department VARCHAR(40) NOT NULL,
    role VARCHAR(30) NOT NULL,
    manager VARCHAR(30),
    salary INT
    ); 


// -----

DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;

DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
   id INT AUTO_INCREMENT PRIMARY KEY,
   dept_name VARCHAR(30)
);

CREATE TABLE roles (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL(15,2),
   dept_id INT,
   CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
   id INT AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT,
   manager_id INT,
   CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
   );