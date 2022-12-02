import { useSelector } from "react-redux";
import imageAside from "../../assets/girlWithPhone.png";
import { Link as LinkRouter } from "react-router-dom";

function CellPhones() {

const celulares = useSelector(store => store.celularesReducer.celulares)
  const filterPrecio = celulares.map((p) => p.price);
  const precios = Object.keys(filterPrecio);

  return (
    <>
   
      <section className="flex justify-center flex-wrap p-10 w-full" >
        <div
          className="text-center lg:text-left rounded bg-[#e46804] p-8 m-1 text-white hover:animate__headShake"
          style={{ animation: "animate__ animated animate__headShake" }}
        >
          
          <img
            src={imageAside}
            alt="Girl grabbing a phone"
            style={{ height: "20rem", width: "15rem", objectFit: "cover" }}
          />
          <h2 className="text-2xl font-bold">Celulares</h2>
          <p className="mt-4 max-w-[45ch] text-sm">
            Xiaomi, Asus, Nubia y más!
          </p>
        </div>
       
        {celulares.map((cellphone, index)=> 
          <div key={index} className="w-60 bg-white shadow rounded m-1">
            <div
              className="h-80 w-full bg-gray-200 flex flex-col justify-between p-2 bg-contain bg-no-repeat bg-center object-cover"
              style={{ backgroundImage: `url(${cellphone?.image.img1})` }}
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
                {cellphone?.brand}
              </p>
              <h1 className="text-gray-800 text-center mt-1">{cellphone?.name}</h1>
              <p className="text-center text-gray-800 mt-1 flex flex-col flex-wrap">
                {precios}
              </p>
              <div className="inline-flex items-center mt-2">
                <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
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
                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  1
                </div>
                <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
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
              <LinkRouter to={`caracteristicas/${cellphone?._id}`}>
                <button className="py-2 px-4 bg-[#e46804] text-white rounded hover:bg-orange-400 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                  Ver más
                </button>
              </LinkRouter>
            </div>
          </div>)}
        )
      </section>
    </>
  );
}

export default CellPhones;
