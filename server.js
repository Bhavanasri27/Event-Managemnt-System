const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});