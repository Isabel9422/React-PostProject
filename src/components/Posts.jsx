import { useEffect, useState } from "react"
import {getPosts} from "../services/posts"

function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(setPosts).catch((error) => console.log(error))   //Aqui recibimos todos los posts
    }, []);
  return (
    <div>
      {posts.map((post) => (
        <p className="text-slate-900" key={post.id}>{post.titulo}</p>
      ))}
    </div>
  )
}

export default Posts
