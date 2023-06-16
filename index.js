const express = require('express');
const app = express();
const cors = require('cors');
require('./database');

const JobsRoutes = require('./routes/jobs');

app.use(cors())
app.use(express.json());

//Routes
app.use("/api/jobs", JobsRoutes);


app.listen(3000, ()=> {
    console.log('App running at 3000');
});