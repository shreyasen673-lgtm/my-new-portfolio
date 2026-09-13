const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const VALID_EMAIL = "shreyasen673@gmail.com";
const VALID_PASSWORD = "1234";

app.get('/api/get-credentials', (req, res) => {

    res.json({
        email: VALID_EMAIL,
        password: VALID_PASSWORD
    });

});
app.post('/api/login', (req, res) => {

    const { email, password } = req.body || {};
    const cleanEmail = email ? String(email).trim().toLowerCase() : "";
    const cleanPassword = password ? String(password).trim() : "";
    if (cleanEmail !== VALID_EMAIL.toLowerCase()) {

        return res.status(404).json({ message: "404 Not Found:The email is incorrect" });

    }
    if (cleanPassword !== VALID_PASSWORD) {

        return res.status(409).json({ message: "409 Conflict :The password is incorrect" });

    }
    return res.status(200).json({ message: "Login successful!:Thank you" });

});
app.listen(5000, () => {

    console.log("Server running on http://localhost:5000");

}); 
