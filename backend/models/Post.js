import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true },
  author: { type: String, default: "anonymous" },
  tags: [{ type: String }]
}, { timestamps: true });

export default mongoose.model("Post", PostSchema);