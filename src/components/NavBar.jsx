function NavBar() {
  const user = true;
  return (
    <div className="w-full max-h-min">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center">
            <img
              src="https://cdn-icons.flaticon.com/png/512/4104/premium/4104914.png?token=exp=1659732710~hmac=d0ce69bf5ab0da8bd072095248b02279"
              className="mr-3 h-6 sm:h-9"
              alt="Postslogo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              PostProject
            </span>
          </a>
          <div className="flex md:order-2">
          </div>
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Artículos
              </a>
            </li>
            {/* <input
              type="text"
              id="search-navbar"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar artículos..."
            /> */}
            <div className="mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
