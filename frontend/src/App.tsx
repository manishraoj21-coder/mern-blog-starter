import React,{useEffect,useState} from "react";
import { createPost, fetchPosts, Post } from "./api";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
export default function App(){
 const [posts,setPosts]=useState<Post[]>([]); const [loading,setLoading]=useState(false); const [error,setError]=useState<string|null>(null);
 const load=async()=>{ setError(null); setLoading(true); try{ setPosts(await fetchPosts()); }catch(e:any){ setError(e.message||"Failed to fetch"); } finally{ setLoading(false);} };
 useEffect(()=>{ load(); },[]);
 const onCreate=async(p:any)=>{ try{ await createPost(p); await load(); }catch(e:any){ alert(e.message||"Failed to create"); } };
 return (<main className="container"><h1>MERN Blog Starter</h1><PostForm onCreate={onCreate} /><hr/>{loading&&<p>Loading...</p>}{error&&<p style={{color:"crimson"}}>{error}</p>}{!loading&&!error&&<PostList posts={posts}/>}</main>);
}
