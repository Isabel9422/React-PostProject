import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-h-lg min-w-[45%]">
      <div className="bg-grey-lighter flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-4 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-2xl text-center text-blue-900">Registrate</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("Name", { required: true, maxLength: 20 })}
                type="text"
                class="block border border-grey-light w-full p-2 rounded mb-4"
                name="fullname"
                placeholder="Nombre"
              />
              <input
                type="text"
                class="block border border-grey-light w-full p-2 rounded mb-4"
                name="fullname"
                placeholder="Apellidos"
              />
              <input
                type="text"
                class="block border border-grey-light w-full p-2 rounded mb-4"
                name="email"
                placeholder="Email"
              />
              <input
                type="text"
                class="block border border-grey-light w-full p-2 rounded mb-4"
                name="Username"
                placeholder="Usuario"
              />
              <input
                type="password"
                class="block border border-grey-light w-full p-2 rounded mb-4"
                name="password"
                placeholder="Contraseña"
              />
              <input
                type="password"
                class="block border border-grey-light w-full p-2 rounded mb-4"
                name="confirm_password"
                placeholder="Confirmar contraseña"
              />
              <div className="">
                <button
                  type="submit"
                  class="text-white items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 w-[35%]"
                >
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
          <div class="text-white mt-3">
            ¿Ya tienes una cuenta? <nbsp></nbsp>
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Inicia sesión.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
