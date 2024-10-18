
const express = require('express')
const dotenv = require("dotenv"); dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors')


const dbConnection = require('./config/database');
dbConnection();


const productRoutes = require('./routes/servicesRoutes');



app.use(express.json());

app.use(cors());

app.use('/services', productRoutes);






// Listen
app.listen(PORT, () => {
  console.log(`App Server running on port ${PORT}`);
});