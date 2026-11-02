
const employees = require("../models/employeeModel");

exports.getEmployees = (req, res) => {
    res.json(employees);
};

exports.getEmployeeById = (req, res) => {
    const employee = employees.find(
        emp => emp.id === Number(req.params.id)
    );

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
};

exports.addEmployee = (req, res) => {
    const { name, role, salary } = req.body;

    if (!name || !role || salary === undefined) {
        return res.status(400).json({ message: "Missing employee details" });
    }

    const employee = {
        id: Date.now(),
        name,
        role,
        salary: Number(salary)
    };

    employees.push(employee);

    res.status(201).json(employee);
};

exports.deleteEmployee = (req, res) => {
    const id = Number(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Employee not found" });
    }

    employees.splice(index, 1);

    res.json({ message: "Employee deleted successfully" });
};
