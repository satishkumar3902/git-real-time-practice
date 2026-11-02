
exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin123") {
        return res.json({ message: "Login successful" });
    }

    res.status(401).json({ message: "Invalid credentials" });
};
