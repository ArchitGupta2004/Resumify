const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// JSON file ka path
const dataPath = path.join(__dirname, "data.json");

// Read JSON file
function getData() {
  const jsonData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(jsonData);
}

// Write JSON file
function saveData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// -------------------- SIGNUP API --------------------
app.post("/api/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const data = getData();

  // Check duplicate user
  const userExists = data.users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ success: false, message: "User already exists" });
  }

  // Save new user
  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    password
  };

  data.users.push(newUser);
  saveData(data);

  res.json({
    success: true,
    message: "Signup successful",
    user: newUser
  });
});

// -------------------- LOGIN API --------------------
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const data = getData();
  const user = data.users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).json({ success: false, message: "Invalid email or password" });
  }

  res.json({
    success: true,
    message: "Login successful",
    user
  });
});

// -------------------- SERVER --------------------
app.listen(5000, () => console.log("JSON Backend Running on port 5000"));
