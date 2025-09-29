import React from "react";
import { Post } from "../api";
export default function PostList({posts}:{posts:Post[]}){
 if(!posts.length) return <p>No posts yet.</p>;
 return (<ul className="list">{posts.map(p=>(<li key={p._id} className="card" tabIndex={0}>
  <h3>{p.title}</h3><p>{p.body}</p>
  <small>by {p.author||"anonymous"} • {new Date(p.createdAt).toLocaleString()}</small>
  {p.tags?.length?<div className="tags">{p.tags.map(t=><span key={t}>#{t} </span>)}</div>:null}
 </li>))}</ul>);
}
