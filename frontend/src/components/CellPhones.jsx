import React from 'react'
import { useSelector } from 'react-redux'
import imageAside from '../assets/girlWithPhone.png'

function CellPhones() {

    const celulares = useSelector(store => store.celularesReducer.celulares)
    const precios = celulares.map(a=>a.price)
    const arrayPrecios = Object.entries(precios)


    return (
        <>
            <section className='flex justify-center flex-wrap p-10 w-full'>
                <div className="text-center lg:text-left rounded bg-[#e46804] p-8 m-1 text-white">
                    <img src={imageAside} alt="Girl grabbing a phone" style={{ height: "20rem", width:"15rem", objectFit:"cover"}} />
                    <h2 className="text-2xl font-bold">Celulares</h2>
                    <p className="mt-4 max-w-[45ch] text-sm">
                        Xiaomi, Asus, Nubia y más!
                    </p>
                </div>
                {celulares.map((a, index) =>
                    <div key={index} className="w-60 bg-white shadow rounded m-1">

                        <div
                            className="h-80 w-full bg-gray-200 flex flex-col justify-between p-2 bg-contain bg-no-repeat bg-center object-cover"
                            style={{ backgroundImage: `url(${a.image.img1})` }}
                        >
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="right rounded-full bg-black p-2 text-white"
                                >
                                    <span className="sr-only">Wishlist</span>
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        ></path>
                                    </svg>
                                </button>
                              
                            </div>

                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <p className="text-gray-400 font-light text-xs text-center">
                                {a.brand}
                            </p>
                            <h1 className="text-gray-800 text-center mt-1">{a.name}</h1>
                            {arrayPrecios.forEach(([key, value]) =>
                            <p className="text-center text-gray-800 mt-1 flex flex-col">{value}</p>)}
                            <div className="inline-flex items-center mt-2">
                                <button
                                    className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 12H4"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
                                >
                                        1
                                </div>
                                <button
                                    className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <button
                                className="py-2 px-4 bg-[#e46804] text-white rounded hover:bg-orange-400 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                            >
                                Añadir al carrito
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>)}
            </section>
        </>
    )
}

export default CellPhones
