
export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Next 14</span>
        </a>
        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent bg-gray-800 border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white rounded md:hover:text-blue-500 transition-colors" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white rounded md:hover:text-blue-500 transition-colors" aria-current="page">Nosotros</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white rounded md:hover:text-blue-500 transition-colors" aria-current="page">Precio</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white rounded md:hover:text-blue-500 transition-colors" aria-current="page">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}