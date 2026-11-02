
const express = require("express");
const router = express.Router();

const {
    getEmployees,
    getEmployeeById,
    addEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
