import { useForm } from "react-hook-form";
import { logi } from "../../services/users";


export default function Login() {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await logi(data)
    const token = res.token.token
    reset({
      email: "",
      password: "",
    })
    localStorage.setItem("token", token)
    console.log(localStorage.getItem("token"))
  }
  console.log(watch(["email","password"]))

  return (
    <>
      <div className="flex items-center justify-center sm:px-6 lg:px-8 pt-0">
        <div className="max-w-md min-w-[145%] w-full">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="https://5thelementworld.com/img/Albums.png"
              alt="FifthElement"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
              Inicia sesión
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email" className="sr-only">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  for="remember"
                  className="ml-2 text-sm font-medium text-white"
                >
                  Recordar usuario
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-white hover:text-slate-200"
                >
                  ¿Olvidaste <br></br> la contraseña?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class=" bg-white text-gray-700 border hover:bg-gradient-to-bl from-white to-slate-500 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 max-w-[100px]"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
