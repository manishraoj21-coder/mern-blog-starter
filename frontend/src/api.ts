export async function fetchPosts() {
  const res = await fetch("/api/posts");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}