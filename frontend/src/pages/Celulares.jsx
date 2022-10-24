import React from 'react'
import { useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'
import imageAside from '../assets/girlWithPhone.png'

const Celulares = () => {


  const celulares = useSelector(store => store.celularesReducer.celulares)
  console.log(celulares)

  return (
    <section>
      <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch"
        >
          <div className="flex items-center rounded bg-gray-300 p-8">
            <div className="mx-auto text-center lg:text-left">
              <img src={imageAside} alt="Girl grabbing a phone" style={{height:"15rem"}} />
              <h2 className="text-2xl font-bold">Celulares</h2>
              <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
                Xiaomi, Asus, Nubia y más!
              </p>
            </div>
          </div>
          {celulares.map(cel =>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-1 text-white">
              <LinkRouter to="#" className="relative block">

                <button
                  type="button"
                  class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                >
                  <span class="sr-only">Wishlist</span>
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </button>

                <img
                  alt="Toy"
                  src={cel.image.img1}
                  class="h-56 w-full object-contain"
                />

                <div class="p-6">
                  <p class="text-sm font-medium text-gray-600">$14.99</p>

                  <h3 class="mt-1 text-lg font-bold">{cel.name}</h3>
                  <p>{cel.features}</p>

                  <button
                    type="button"
                    class="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4"
                  >
                    <span class="text-sm font-medium"> Añadir al carrito </span>

                    <svg
                      class="ml-1.5 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </LinkRouter>
            </div>)}
        </div>
      </div>
    </section>
  )
}

export default Celulares
