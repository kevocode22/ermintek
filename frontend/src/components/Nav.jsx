import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../styles/index.css'
import Logo from '../assets/Logos/logoLightTransparent.png'
import Avatar from '../assets/user.png'
import { Link, Link as LinkRouter, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import usuariosActions from '../redux/actions/usuariosActions'
import toast from 'react-hot-toast'
import 'animate.css';


const navigation = [
  { name: 'Inicio', to: '/', current: false },
  { name: 'Celulares', to: '/celulares', current: false },
  { name: 'Computadoras', to: '/computadoras', current: false },
  { name: 'Apple', to: '/apple', current: false },
  { name: 'Precios', to: '/precios', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const usuario = useSelector(store => store.usuariosReducer.user)
  // console.log(usuario)

  async function desloguearse() {
    await dispatch(usuariosActions.desloguearse())
    toast("Te esperamos pronto!")
    navigate("/home", { replace: true })

  }



  return (

    <Disclosure as="nav" className="bg-[#31565900] uppercase NavBar animate__animated animate__backInLeft">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-xs">
            <div className="relative flex h-28 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#04aa9fdc] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only text-xs">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">

                <div className="flex flex-shrink-0 items-center">
                  <Link to='/home'>
                    <img
                      className="h-20 w-20"
                      src={Logo}
                      alt="Ermintek"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block items-center text-sm">
                  <div className="flex space-x-4 mt-3">
                    {navigation.map((item) => (
                      <LinkRouter
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-[#e46904d3] hover:text-white hover:animate-pulse',
                          'px-3 py-2 rounded-md text-lg'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </LinkRouter>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">

                  <div className='flex px-4'>
                    <Menu.Button as="div" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={usuario && usuario.imagen ? `${usuario?.imagen}` : `${Avatar}`}
                        alt="avatar"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <LinkRouter
                            to="/account"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Iniciar Sesión
                          </LinkRouter>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <LinkRouter
                            to="/logout"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-700')}
                            onClick={desloguearse}
                          >
                            Cerrar Sesión
                          </LinkRouter>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <LinkRouter to={item.to}
                  key={item.name}>
                  <Disclosure.Button
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </LinkRouter>

              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  )
}

export default Nav