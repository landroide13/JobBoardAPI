const Job = require('../models/Job')

exports.createJob = async(req, res) =>{
    console.log(req.body);
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
    const Jobs = await Jobs.find();
    res.status(200).json(Jobs);
}

exports.getJob = async(req, res) =>{
    const Job = await Job.findById(req.params.id)
    res.status(200).json(audio);
}

exports.updateJob = async(req, res) =>{
    const updateJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateJob);
}

exports.deleteJob = async(req, res) =>{
    await Job.findByIdAndDelete(req.params.id);
    res.status(204).json();
}
