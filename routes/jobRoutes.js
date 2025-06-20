const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createJob, updateJob, deleteJob, getJobs, getSingleJob } = require('../controllers/jobController');

const router = express.Router();

router.post('/', authMiddleware, createJob); // Protected
router.put('/:id', authMiddleware, updateJob);
router.delete('/:id', authMiddleware, deleteJob);
router.get('/', authMiddleware, getJobs);
router.get('/:id', authMiddleware, getSingleJob);

module.exports = router;
