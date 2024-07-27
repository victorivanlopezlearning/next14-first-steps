import { ActiveLink } from '@/components';

const navItems = [
  { path: '/about', text: 'Nosotros' },
  { path: '/pricing', text: 'Precio' },
  { path: '/contact', text: 'Contacto' },
]

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Next 14</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent bg-gray-800 border-gray-700">
            {navItems.map(navItem => (
              <ActiveLink key={navItem.path} {...navItem} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}