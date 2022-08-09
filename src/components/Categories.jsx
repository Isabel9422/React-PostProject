import { useEffect, useState } from "react";
import {getCategories} from "../services/posts"

function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      getCategories()
        .then(setCategories)
        .catch((error) => console.log(error)); //Aqui recibimos todos los posts
    }, []);
    return (
    <div className="text-sm text-sky-700">
      {categories.slice(1,2).map((category) => (
        <p>{category.nombre}</p>
      ))}
    </div>
  )
}

export default Categories
