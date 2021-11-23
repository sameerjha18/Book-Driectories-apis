const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//connect db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('Connected to db!!')
 );

 app.use(express.json());

//initialize routes
app.use('/api',require('./router/book'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});