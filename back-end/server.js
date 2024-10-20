const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");

const dbConnection = require("./config/database");
dbConnection();

const serviceRoutes = require("./routes/servicesRoutes");
const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/AdminRoutes");

app.use(express.json());

app.use(cors());

app.use("/services", serviceRoutes);
app.use("/home", homeRoutes);
app.use("/about", aboutRoutes);
app.use("/contact", contactRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`App Server running on port ${PORT}`);
});
