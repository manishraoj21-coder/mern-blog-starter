import { Router } from "express";
import Post from "../models/Post.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { title, body, author, tags } = req.body;
    if (!title || !body) return res.status(400).json({ message: "title and body are required" });
    const post = await Post.create({ title, body, author, tags });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error creating post", error: String(err) });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(100);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: String(err) });
  }
});

export default router;