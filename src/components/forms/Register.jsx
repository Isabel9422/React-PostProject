import { useForm } from "react-hook-form";
import { registro } from "../../services/users.js";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      username: "",
      password: "",
      tipoRol: "",
    },
  });
  const onSubmit = (data) =>{
   registro(data)
   reset({
    nombre: "",
    apellidos: "",
    email: "",
    username: "",
    password: "",
    tipoRol: "",
  })
  }
  return (
    <div className="max-h-lg min-w-[45%] pt-20">
      <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-4 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-2xl text-center text-blue-900">
            Registrate
          </h1>
          <form name="formulario" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("nombre", { required: true })}
              type="text"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              placeholder="Nombre"
            />
            <input
              name="apellidos"
              {...register("apellidos", { required: true })}
              type="text"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              placeholder="Apellidos"
            />
            <input
              name="email"
              {...register("email", { required: true })}
              type="text"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              placeholder="Email"
            />
            <input
              name="username"
              {...register("username", { required: true })}
              type="text"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              placeholder="Usuario"
            />
            <input
              name="password"
              {...register("password", { required: true })}
              type="password"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              placeholder="Contrase??a"
            />
            {/* <input
              type="password"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              // name="confirm_password"
              placeholder="Confirmar contrase??a"
            /> */}
            <div>
              <button
                type="submit"
                className="text-white items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 w-[35%]"
              >
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
        <div className="text-white mt-3">
          ??Ya tienes una cuenta? <nbsp></nbsp>
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Inicia sesi??n.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
