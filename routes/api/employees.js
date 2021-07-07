const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const checkInput = require('../../utils/checkInput');

//get all employees
router.get('/employees', (req, res) => {
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, 
    roles.title, roles.salary, 
    departments.dept_name
    FROM employees
    JOIN roles ON employees.role_id = roles.id
    JOIN departments ON roles.dept_id = departments.id`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message
        });
        return
      }
      res.json({
        message: 'success',
        data: rows
      })
    })
})

//get one employee
router.get('/employees/:id', (req, res) => {
const sql = `SELECT * FROM employees WHERE id = ?`;
const params = [req.params.id]

db.query(sql, params, (err, row) => {
    if (err) {
    res.status(400).json({
        error: err.message
    })
    return;
    }
    res.json({
    message: 'success',
    data: row
    })
})
});

// delete an employee
router.delete('/employee/:id', (req, res) => {
const sql = `DELETE FROM employees WHERE id =?`;
const params = [req.params.id]
db.query(sql, params, (err, result) => {
    if (err) {
    res.status(400).json({
        error: err.message
    })
    } else if (!result.affectedRows) {
    res.json({
        message: 'Employee not found.'
    })
    } else {
    res.json({
        message: 'Employee deleted successfully.',
        changes: result.affectedRows,
        id: req.params.id
    })
    }
})
});

router.post('/employee', ({body}, res) => {
const errors = checkInput(body, 'first_name', 'last_name','role_id','manager_id')

if (errors) {
    res.status(400).json({error: errors})
    return;
}
const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
            VALUES (?,?,?,?)`;
const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

db.query(sql, params, (err, result) => {
    if (err) {
    res.status(400).json({
        error: err.message
    })
    }
    res.json({
    message: 'Employee added successfully!',
    data: body
    })
})
})

// update employee's role
router.put('/employee/:id', (req, res) => {
const errors = checkInput(req.body, 'role_id');

if (errors) {
res.status(400).json({ error: errors });
return;
}
const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
const params = [req.body.role_id, req.params.id];

db.query(sql, params, (err, result) => {
    if(err){
    res.status(400).json({message: err.message});
    return
    }
    else if(!result.affectedRows){
    res.json({message: 'Employee not found.'})
    }
    else {
    res.json({
        message: 'Employee role successfully updated!',
        data: req.body,
        changes: result.affectedRows
    })
    }
})
})

module.exports = router;  