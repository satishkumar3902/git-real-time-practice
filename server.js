
const express = require("express");

const employeeRoutes = require("./routes/employeeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Employee Management API is running" });
});

app.use("/api/employees", employeeRoutes);
app.use("/api/auth", authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
