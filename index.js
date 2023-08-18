const express = require('express');
const app = express();
var boolParser = require('express-query-boolean');
 
const cors = require('cors');
require('./database');

const JobsRoutes = require('./routes/jobs');

app.use(cors())
app.use(express.json());
app.use(boolParser());

//Routes
app.use("/api/jobs", JobsRoutes);


app.listen(3000, ()=> {
    console.log('App running at 3000');
});