const Job = require('../models/Job')

exports.createJob = async(req, res) =>{
    //console.log(req.body);
    const { employer_name, 
            job_title, 
            job_description, 
            job_employment_type, 
            job_apply_link, 
            job_latitude, 
            job_longitude,
            Qualifications, 
            Responsibilities, 
            job_country, 
            job_city, 
            job_is_remote, 
            employer_logo } = req.body;

    const newJob = new Job({ employer_name, 
        job_title, 
        job_description, 
        job_employment_type, 
        job_apply_link, 
        job_latitude, 
        job_longitude,
        Qualifications, 
        Responsibilities, 
        job_country, 
        job_city, 
        job_is_remote, 
        employer_logo });
    const jobConf = await newJob.save();
    res.status(200).json(jobConf);
}

exports.getJobs = async(req, res) =>{
    const Jobs = await Job.find();
    res.status(200).json(Jobs);
}

exports.getType = async(req, res) =>{
    const jobs = await Job.find();

    const { job_employment_type, job_is_remote } = req.query;

    let result = [...jobs];

    if (job_employment_type){
        result = result.filter(r => r.job_employment_type === job_employment_type);
    }
    if(job_is_remote){
        result = result.filter(r => r.job_is_remote === job_is_remote);
    }  

    res.status(200).json(result);
}

exports.getJob = async(req, res) =>{
    const JobFind = await Job.findById(req.params.id)
    res.status(200).json(JobFind);
}

exports.updateJob = async(req, res) =>{
    const updateJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateJob);
}


