import { useDispatch, useSelector } from "react-redux";
import imageAside from "../../assets/girlWithPhone.png";
import { Link as LinkRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import celularesActions from "../../redux/actions/celularesActions";

function CellPhones() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const filtro = useSelector((store) => store.celularesReducer.celulares);

  useEffect(() => {
    dispatch(celularesActions?.filterCellphones(search));
    //eslint-disable-next-line
  }, []);

  const cellFilter = filtro.filter((cellphone) => {
    if (cellphone.name.toUpperCase().includes(search.toUpperCase())) {
      return true;
    }
    return false;
  });

  const handleChange = async (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center py-4 pt-28">
        <input
          type="text"
          className="input-style w-3/4 "
          placeholder="Busca por nombre..."
          value={search}
          onChange={handleChange}
        />
      </div>
      <section className="flex justify-center flex-wrap p-10 w-full">
        <div
          className="text-center lg:text-left rounded bg-[#e46804] p-8 m-1 text-white hover:animate__headShake"
          style={{ animation: "animate__ animated animate__headShake" }}
        >
          <img
            src={imageAside}
            alt="Girl grabbing a phone"
            style={{
              height: "20rem",
              width: "15rem",
              objectFit: "cover",
              display: "block",
            }}
          />
          <h2 className="text-2xl font-bold">Celulares</h2>
          <p className="mt-4 max-w-[45ch] text-sm">
            Xiaomi, Asus, Nubia y más!
          </p>
        </div>
        {cellFilter.length > 0 ? (
          cellFilter?.map((cellphone, index) => (
            <div key={index} className="w-60 bg-white shadow rounded m-1">
              <div
                className="h-80 w-full bg-gray-200 flex flex-col justify-between p-2 bg-contain bg-no-repeat bg-center object-cover"
                style={{ backgroundImage: `url(${cellphone.image?.img1})` }}
              ></div>
              <div className="p-4 flex flex-col items-center">
                <p className="text-gray-400 font-light text-xs text-center">
                  {cellphone?.brand}
                </p>
                <h1 className="text-gray-800 text-center mt-1">
                  {cellphone?.name}
                </h1>
                <p className="text-center text-gray-800 mt-1 flex flex-col flex-wrap"></p>

                <LinkRouter to={`caracteristicas/${cellphone?._id}`}>
                  <button className="py-2 px-4 bg-[#832780] text-white rounded hover:bg-[#b059d7] active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                    Ver Más{" "}
                  </button>
                </LinkRouter>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-9xl w-4/6 p-10 font-[Jost] ">
            No hemos encontrada nada que coincida con tu búsqueda🔍...
          </p>
        )}
        )
      </section>
    </>
  );
}

export default CellPhones;
