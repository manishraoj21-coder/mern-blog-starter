import React,{useState} from "react";
export default function PostForm({onCreate}:{onCreate:(p:{title:string;body:string;author?:string;tags?:string[]})=>Promise<void>}){
 const [title,setTitle]=useState(""); const [body,setBody]=useState(""); const [author,setAuthor]=useState(""); const [tags,setTags]=useState("");
 const submit=async(e:React.FormEvent)=>{ e.preventDefault(); if(!title||!body)return; await onCreate({title,body,author:author||undefined,tags:tags?tags.split(',').map(t=>t.trim()).filter(Boolean):[]}); setTitle(""); setBody(""); setAuthor(""); setTags(""); };
 return (<form onSubmit={submit} className="form" aria-label="Create Post">
  <input placeholder="Title *" value={title} onChange={e=>setTitle(e.target.value)} required />
  <textarea placeholder="Body *" value={body} onChange={e=>setBody(e.target.value)} required rows={5} />
  <input placeholder="Author" value={author} onChange={e=>setAuthor(e.target.value)} />
  <input placeholder="Tags (comma-separated)" value={tags} onChange={e=>setTags(e.target.value)} />
  <button type="submit">Create Post</button>
 </form>);
}
