import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  hoistedLink: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
