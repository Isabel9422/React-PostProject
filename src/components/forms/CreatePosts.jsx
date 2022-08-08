import Tags from "../Tags";
import { createBlogPost } from "../../services/posts.js";
import { useForm } from "react-hook-form";

function CreatePosts() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      titulo: "",
      descripcion: "",
      categoriaId: "",
    },
  });

  const onSubmit = (data) => {
    createBlogPost(data)
    reset({
      titulo: "",
      descripcion: "",
      categoriaId: ""
    })
  }
  console.log(watch(["titulo","descripcion","categoriaId"]))

  return (
    <div className="bg-white p-8 rounded-md flex flex-col gap-5 min-w-[60%] min-h-[60%] max-h-lg mb-8">
      <form name="CreatePost" onSubmit={handleSubmit(onSubmit)}>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800"
        >
          Título
        </label>
        <input
          {...register("titulo", { required: true })}
          type="text"
          id="small-input"
          className="block mb-4 p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div>
          <label
            for="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800"
          >
            Mensaje
          </label>
          <textarea
            {...register("descripcion", { required: true })}
            name="descripcion"
            type="text"
            id="large-input"
            className="block p-4 pb-14 mb-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800"
          >
            Selecciona las categorías
          </label>
          <div className="pt-2 pb-2 mb-8">
            <Tags onClick={(tagId) => setValue("categoriaId", (tagId))}/>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 max-w-[85px]"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default CreatePosts;
