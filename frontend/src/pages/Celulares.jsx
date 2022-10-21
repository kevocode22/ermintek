import React from 'react'
import { useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'

const Celulares = () => {


  const celulares = useSelector(store => store.celularesReducer.celulares)
  console.log(celulares)

  return (
    <div>
      <section className='flex flex-wrap flex-row'>
        <div className="mx-auto w-full px-4 py-12 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch"
          >
            <div className="flex items-center rounded bg-gray-300 p-8">
              <div className="mx-auto text-center lg:text-left">
                <h2 className="text-2xl font-bold">Celulares</h2>

                <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
                  Xiaomi
                </p>

                <LinkRouter
                  to="#"
                  className="mt-6 inline-block rounded bg-black px-6 py-3 text-sm text-white"
                >
                  View the Range
                </LinkRouter>
              </div>
            </div>
            {celulares.map(cel =>
              <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12 text-white">
                <LinkRouter to="#" className="block">
                  <img
                    alt="Simple Watch"
                    src={cel.image.img1}
                    className="aspect-square w-full rounded object-cover"
                  />

                  <div className="mt-2">
                    <h3 className="font-medium">{cel.name}</h3>
                    <h5 className='text-xs'>{cel.brand}</h5>
                    <p className="mt-1 text-sm text-gray-700 text-truncate">{cel.description}</p>
                  </div>
                  <button className='bg-red-600 p-2 rounded-lg text-center uppercase text-xs'>Ver más</button>
                </LinkRouter>
              </div>)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Celulares
