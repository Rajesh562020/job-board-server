const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.error("DB connection failed:", err));

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  type: String,
  location: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});
const Job = mongoose.model("jobDataDocs", jobSchema);
// const Job = mongoose.model("Job", jobSchema, "job_data");

app.get("/api/jobs", async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

app.get("/api/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

app.post("/api/jobs", async (req, res) => {
  const { title, company, type, location, description } = req.body;
  if (!title || !company || !type || !location || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const job = new Job({ title, company, type, location, description });
  await job.save();
  res.status(201).json(job);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
