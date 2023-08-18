const express = require('express');
const router = express.Router();

const { getJob, getJobs, getType } = require('../controllers/job.controller');

router.get('/', getJobs);

router.get('/types', getType);

router.get('/search');
router.get('/:id', getJob);

//router.post('/', createJob);

//router.put('/:id', updateJob);

module.exports = router;




