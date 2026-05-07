const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

// GET all tasks
app.get("/tasks", (req, res) => {
  const sql = "SELECT * FROM tasks";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});


app.post("/tasks", (req, res) => {
  const { task } = req.body;

  if (!task || task.trim() === "") {
    return res.status(400).json({
      message: "Task cannot be empty",
    });
  }

  const sql = "INSERT INTO tasks (task) VALUES (?)";

  db.query(sql, [task], (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({
        message: "Task added successfully",
      });
    }
  });
});


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});