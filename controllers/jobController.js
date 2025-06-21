const Job = require('../models/job');

// POST /api/jobs
const createJob = async (req, res) => {
  const { company, role, status, appliedDate, notes } = req.body;

    console.log('📦 Incoming Job Data:', req.body);
    console.log('🔐 User from token:', req.user);

  if (!company || !role) {
    return res.status(400).json({ message: "Company and Role are required" });
  } 

  try {
    const job = new Job({
      user: req.user._id,
      company,
      role,
      status,
      appliedDate,
      notes
    });
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error("Create Job Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /api/jobs/:id
const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, role, status, appliedDate, notes } = req.body;

  try {
    const job = await Job.findOne({ _id: id, user: req.user._id });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    job.company = company || job.company;
    job.role = role || job.role;
    job.status = status || job.status;
    job.appliedDate = appliedDate || job.appliedDate;
    job.notes = notes || job.notes;

    const updatedJob = await job.save();
    res.status(200).json(updatedJob);
  } catch (error) {
    console.error("Update Job Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /api/jobs/:id
const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findOneAndDelete({ _id: id, user: req.user._id });
id
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Delete Job Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/jobs
const getJobs = async (req, res) => {
  try {
    const { status, sortBy, order } = req.query;

    const queryObject = {
      user: req.user._id,
    };

    // Filter by status if provided
    if (status && status !== 'All') {
      queryObject.status = status;
    }

    let jobQuery = Job.find(queryObject);

    // Apply sorting
    if (sortBy) {
      const sortOrder = order === 'desc' ? -1 : 1;
      jobQuery = jobQuery.sort({ [sortBy]: sortOrder });
    }

    const jobs = await jobQuery;
    res.status(200).json(jobs);
  } catch (error) {
    console.error("❌ Fetch Error:", error);
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};

// GET /api/jobs/:id
const getSingleJob = async (req, res) => {
  const { id } = req.params;

  console.log("📥 Getting job for ID:", id);
  console.log("🔐 User from token:", req.user);
  try {
    const job = await Job.findById({ _id: id, user: req.user._id });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
};  

module.exports = { 
  createJob,  
  updateJob,
  deleteJob,
  getJobs,
  getSingleJob,
};
