import { Router } from "express";
import Post from "../models/Post.js";
const router = Router();
router.post("/", async (req,res)=>{ try{ const {title,body,author,tags}=req.body; if(!title||!body) return res.status(400).json({message:"title and body are required"}); const post=await Post.create({title,body,author,tags}); res.status(201).json(post);}catch(e){res.status(500).json({message:"Error creating post",error:String(e)})}});
router.get("/", async (_req,res)=>{ try{ const posts=await Post.find().sort({createdAt:-1}).limit(200); res.json(posts);}catch(e){res.status(500).json({message:"Error fetching posts",error:String(e)})}});
router.get("/:id", async (req,res)=>{ try{ const post=await Post.findById(req.params.id); if(!post) return res.status(404).json({message:"Not found"}); res.json(post);}catch(e){res.status(500).json({message:"Error fetching post",error:String(e)})}});
router.put("/:id", async (req,res)=>{ try{ const {title,body,author,tags}=req.body; const post=await Post.findByIdAndUpdate(req.params.id,{title,body,author,tags},{new:true,runValidators:true}); if(!post) return res.status(404).json({message:"Not found"}); res.json(post);}catch(e){res.status(500).json({message:"Error updating post",error:String(e)})}});
router.delete("/:id", async (req,res)=>{ try{ const out=await Post.findByIdAndDelete(req.params.id); if(!out) return res.status(404).json({message:"Not found"}); res.json({ok:true}); }catch(e){res.status(500).json({message:"Error deleting post",error:String(e)})}});
export default router;
