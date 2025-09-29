export type Post={_id:string;title:string;body:string;author?:string;tags?:string[];createdAt:string;updatedAt:string;};
const handle=async(res:Response)=>{ if(!res.ok){const t=await res.text(); throw new Error(t||res.statusText);} return res.json(); };
export const fetchPosts=async():Promise<Post[]>=> handle(await fetch("/api/posts"));
export const createPost=async(p:{title:string;body:string;author?:string;tags?:string[]})=> handle(await fetch("/api/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}));
