import { useEffect, useState } from "react";
import { getPosts } from "../services/posts";
import Categories from "./Categories";

function Cards() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((error) => console.log(error)); //Aqui recibimos todos los posts
  }, []);
  return (
    <>
      <>{posts.map((post) => (
              <div key={post.id} className="w-72 max-h-[440px] rounded-md bg-white overflow-hidden mt-5">
              <div>
                <img
                  className="imgPosts"
                  alt="imagenPost"
                  src="https://blog.gonzalopozzo.com/static/d52f717f79aca102bdd13af15e455879/23f4e/banner.jpg"
                />
              </div>
              <div className="p-4">
              <Categories/>
                <div className="">
                  <p className=" text-slate-500 text-[12px]">
                    {post.body}
                    </p>
                  <h1 className="text-lg font-bold mb-2">
                  {post.titulo}
                  </h1>
                  <p className="text-sm lg:text-lg overflow-hidden max-h-[100px] truncate	">
                  {post.descripcion}
                  </p>
                </div>
                <footer className="flex justify-between items-center pt-7">
                  <img
                    className="rounded-full w-7 h-7"
                    alt="icono"
                    src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
                  />
                  <p className=" text-slate-500 text-[12px]">3 MIN READ</p>
                </footer>
              </div>
            </div>
      ))}</>
    </>
  );
}

export default Cards;
