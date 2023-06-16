const express = require('express');
const router = express.Router();

const { createJob, getJob, getJobs, deleteJob, updateJob} = require('../controllers/job.controller');

router.get('/', getJobs);
router.get('/:id', getJob);
router.post('/', createJob);
router.delete('/:id', deleteJob);
router.put('/:id', updateJob);

module.exports = router;


