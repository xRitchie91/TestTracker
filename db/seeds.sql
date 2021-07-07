//-----

INSERT INTO employees (last_name, first_name, department, role, manager, salary)
VALUES
('Stephens','Scott','sales','associate','Martin Brodeur',20000); 
('Doan', 'Shane', 'sales', 'associate', 'Keith Tkachuk', 50000)


// -----

INSERT INTO departments (dept_name)
VALUES
('Pharmacy'),
('Grocery'),
('Beauty'),
('Outdoor'),
('General'),
('Testing Department');

INSERT INTO roles (title,salary,dept_id)
VALUES
('Director', 60000, 5),
('General Manager',55000, 5),
('Pharmacy Manager',50000, 1),
('Grocery Manager',45000, 2),
('Beauty Manager',45000, 3),
('Outdoor Manager',45000, 4),
('Cashier', 25000, 5),
('Testing Role', 1000, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Vicki','Trevors',1,1),
('John','Miller',2,2),
('Jasmine','Swillman',7,5),
('Ronald', 'Firbank',7,10),
('Virginia', 'Woolf',4,5),
('Piers', 'Gaveston',7,12),
('Charles', 'LeRoi',3,7),
('Katherine', 'Mansfield',7,12),
('Dora', 'Carrington',7,11),
('Edward', 'Bellamy',4,10),
('Montague', 'Summers',5,1),
('Octavia', 'Butler',6,12),
('Riley','Brookes',7,10),
('Unica', 'Zurn',7,5),
('Bradley','Morgan',7,5),
('Brianna','Miller',7,1);