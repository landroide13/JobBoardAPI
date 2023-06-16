const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    employer_name:{
        type: String,
        required: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    job_description: {
        type: String,
        required: true,
    },
    job_employment_type:{
        type: String
    },
    job_apply_link: {
        type: String,
    },
    job_latitude: {
        type: Number,
    },
    job_longitude: {
        type: Number,
    },
    Qualifications:[
        {
            type: String,
        }
    ],
    Responsibilities:[
        {
            type: String,
        }
    ],    
    job_country: {
        type: String,
    },
    job_city: {
        type: String,
    },
    job_is_remote: {
        type: Boolean,
    },
    employer_logo: {
        type: String,
    },
})


const Job = mongoose.model('Job', JobSchema);

module.exports = Job;