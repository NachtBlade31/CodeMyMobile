const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const connectDB = require('./config/db');
require('dotenv').config();
//importing routes
const userRoutes = require('./routes/user');

//app
const app = express()

//cors
app.use(cors())

//DB Connection
connectDB();

//middleware
app.use(bodyParser.json())




//Route MiddleWare
app.use('/api', userRoutes);

const port = process.env.PORT || 5000
app.listen(port, () => { console.log(`Server is running on ${port}`) })