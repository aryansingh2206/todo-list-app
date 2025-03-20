require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// ✅ Enable CORS for frontend (React)
app.use(
  cors({
    origin: "http://localhost:3000", // Change this in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit process on DB failure
  });

// ✅ API Routes
app.use("/api/todos", todoRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("Todo API is running...");
});

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Internal Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
