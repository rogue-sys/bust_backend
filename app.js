//app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const busScheduleRoutes = require("./routes/busScheduleRoutes");
const userRoutes = require("./routes/user_router");
const connectDB = require("./config/db");
connectDB();
const app = express()

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}))
app.use("/api", busScheduleRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
