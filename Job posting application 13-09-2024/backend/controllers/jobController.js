import { JobModel } from "../models/JobModel.js";

export const createJob = async (req, res) => {
    const { title, description, skills, salary } = req.body;

    try {
        const newJob = await new JobModel({
            title,
            description,
            skills,
            salary
        }).save();
        res.status(200).json({ message: 'Job Created Successfully!', job: newJob });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error.Please Try again later.' });
    }
}

export const updateJobById = async (req, res) => {
    const { title, description, skills, salary, jobId } = req.body;
    try {
        const updatedJob = await JobModel.findByIdAndUpdate(
            jobId,
            { title, description, skills, salary },
            { new: true, runValidators: true }
        );
        if (updatedJob == null) {
            res.status(404).json({ message: 'Job not found' });
        } else {
            res.status(201).json({ message: 'Job updated successfully!', job: updatedJob });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error. Please Try again later.' });
    }
}

export const deleteJobById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedJob = await JobModel.findByIdAndDelete(id);
        if (deletedJob == null) {
            res.status(404).json({ message: 'Job not found' });
        } else {
            res.status(200).json({ message: 'Job deleted successfully!', job: deletedJob });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error. Please Try again later.' });
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await JobModel.find({});
        res.status(200).json({ message: 'Jobs retrieved successfully!', jobs });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error. Please Try again later.' });
    }
}