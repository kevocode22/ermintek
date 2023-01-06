import React from "react";
import { useSelector } from "react-redux";
import imageAside from "../../assets/apple.png";
import { Link as LinkRouter } from "react-router-dom";

function AppleProducts() {
  const appleProducts = useSelector(
    (store) => store.macBooksReducer.allProducts.laptops
  );

  return (
    <>
      <section className="flex justify-center flex-wrap p-10 w-full">
        <div
          className="text-center lg:text-left rounded bg-[#05000070] p-8 m-1 text-white hover:animate__headShake"
          style={{ animation: "animate__ animated animate__headShake" }}
        >
          <img
            src={imageAside}
            alt="Girl grabbing a phone"
            style={{ height: "20rem", width: "15rem", objectFit: "contain" }}
          />
          <h2 className="text-2xl font-bold">Productos Apple</h2>
          <p className="mt-4 max-w-[45ch] text-sm">
            Iphone, Ipad y Macbook!
          </p>
        </div>
        {appleProducts?.map((apple, index) => (
          <div key={index} className="w-60 bg-white shadow rounded m-1">
            <div
              className="h-80 w-full bg-gray-200 flex flex-col justify-between p-2 bg-contain bg-no-repeat bg-center object-cover"
              style={{ backgroundImage: `url(${apple?.image.img1})` }}
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
                {apple?.brand}
              </p>
              <h1 className="text-gray-800 text-center mt-1">{apple?.name}</h1>
              <p className="text-center text-gray-800 mt-1 flex flex-col flex-wrap"></p>

              <LinkRouter to={`caracteristicas/${apple?._id}`}>
                <button className="py-2 px-4 bg-[#e46804] text-white rounded hover:bg-orange-400 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                  Ver Más
                </button>
              </LinkRouter>
            </div>
          </div>
        ))}
        )
      </section>
    </>
  );
}

export default AppleProducts;
