
// Temporary storage for registered users
let users = [];

// REGISTER API
exports.register = (req, res) => {

    const { username, password } = req.body;

    // Check empty fields
    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }

    // Check if user already exists
    const existingUser = users.find(
        user => user.username === username
    );

    if (existingUser) {
        return res.status(409).json({
            message: "User already exists"
        });
    }

    // Create new user
    const newUser = {
        username: username,
        password: password
    };

    users.push(newUser);

    return res.status(201).json({
        message: "Registration successful",
        user: { username: newUser.username }
    });
};


// LOGIN API
exports.login = (req, res) => {

    const { username, password } = req.body;

    const user = users.find(
        user =>
            user.username === username &&
            user.password === password
    );

    if (user) {
        return res.json({
            message: "Login successful"
        });
    }

    return res.status(401).json({
        message: "Invalid credentials"
    });
};
