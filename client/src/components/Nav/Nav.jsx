import { useEffect, useState, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './nav.css'
import Logo from '../../assets/Logos/logoLightTransparent.png'
import { Link, useNavigate, Link as LinkRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import usuariosActions from '../../redux/actions/usuariosActions'
import toast from 'react-hot-toast'
import 'animate.css';
import axios from 'axios'

const navigation = [
  { name: 'Inicio', to: '/', current: false },
  { name: 'Celulares', to: '/celulares', current: false },
  { name: 'Computadoras', to: '/computadoras', current: false },
  { name: 'Apple', to: '/apple', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [reload, setReload] = useState(false)
  const [dolar, setDolar] = useState([])
  const usuario = useSelector(store => store.usuariosReducer.user)

 useEffect(()=>{
axios.get('https://api.bluelytics.com.ar/v2/latest')
.then(res => {
  const apiResponse = res.data.blue;
  setDolar(apiResponse)
}).catch(error=>{
  console.error(error)
})
 },[])


  async function desloguearse() {
    if (usuario){
      await dispatch(usuariosActions.desloguearse())
      toast("Te esperamos pronto!")
      setReload(!reload)
    navigate("/home", { replace: true })
    }
    
  }

  return (

    <Disclosure as="nav" className="bg-black bg-opacity-50 uppercase NavBar animate__animated animate__backInLeft h-30 fixed z-50 w-full sm:h-52 md:h-28" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-xs">
            <div className=" navigationBar relative flex h-28 items-center justify-between">
              <div className="sm:hidden">
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

                <div className="divLogo mt-10">
                  <Link to='/home'>
                    <img
                      src={Logo}
                      alt="Ermintek"
                      className='logoErmintek'
                    />
                  </Link>
                <div className="hidden sm:ml-6 sm:block items-center text-sm">
                  <div className=" navigate flex space-x-4  ml-10">
                    {navigation.map((item) => (
                      <LinkRouter
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 textNeon hover:bg-[#ab5daad8] hover:text-white hover:animate-pulse',
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
                
              <div className='text-white text-sm dolarNav'>Blue: ${dolar.value_sell}</div>
              <a
              href="https://api.whatsapp.com/send?phone=541173639077"
              target="_blank"
              rel="noreferrer"
              className='whatsappIcon pt-9 pl-6'
            >
              <svg
                className="fill-gray-400  hover:fill-[#b331ae]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">

                  {/* <div className='flex px-4'>
                    <Menu.Button as="div" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={usuario && usuario.imagen ? `${usuario?.imagen}` : `${Avatar}`}
                        alt="avatar"
                      />
                    </Menu.Button>
                  </div> */}
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
                     {usuario && usuario ?  (<Menu.Item>
                      {({ active }) => (
                        <LinkRouter
                          to="/"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-700')}
                          onClick={desloguearse}
                        >
                          Cerrar Sesión
                        </LinkRouter>
                      )}
                    </Menu.Item>) : (<Menu.Item>
                        {({ active }) => (
                          <LinkRouter
                            to="/account"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Iniciar Sesión
                          </LinkRouter>
                        )}
                      </Menu.Item>) } 

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