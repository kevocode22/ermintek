import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import imageAside from "../../assets/manWithPc.png";
import { Link as LinkRouter } from "react-router-dom";
import axios from "axios";
import { NumericFormat } from "react-number-format";

const Computadoras = () => {
  const computers = useSelector(
    (store) => store.laptopsReducer.laptops.laptops
  );
  const [dolar, setDolar] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.bluelytics.com.ar/v2/latest")
      .then((res) => {
        const apiResponse = res.data.oficial;
        setDolar(apiResponse.value_sell);
      })
      .catch((error) => {
        console.error(error);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <section className="flex justify-center flex-wrap p-10 w-full pt-28">
      <div className="text-center lg:text-left rounded bg-[#1412a0c5] p-8 m-1 text-white">
        <img
          src={imageAside}
          alt="Man grabbing a laptop"
          style={{ height: "20rem", width: "15rem", objectFit: "cover" }}
        />
        <h2 className="text-2xl font-bold">Computadoras</h2>
        <p className="mt-4 max-w-[45ch] text-sm">
          HP, Dell, Asus, Lenovo y más!
        </p>
      </div>
      {computers &&
        computers?.map((a, index) => (
          <div key={index} className="w-60 bg-white shadow rounded m-1">
            <div
              className="h-80 w-full bg-gray-200 flex flex-col justify-between p-2 bg-contain bg-no-repeat bg-center object-cover"
              style={{ backgroundImage: `url(${a.image.img1})` }}
            ></div>
            <div className="p-4 flex flex-col items-center">
              <p className="text-gray-400 font-light text-xs text-center">
                {a.brand}
              </p>
              <h1 className="text-gray-500 text-center mt-1 text-xl">
                {a.name}
              </h1>
              <h2 className="text-orange-600 text-center drop-shadow-md mt-1 text-xl">
                {a.model}
              </h2>
              <NumericFormat
                value={(a.price * 0.13 + a.price) * dolar}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={0}
                prefix={" ARS "}
                className="text-xl font-semibold"
              />
              <LinkRouter to={`caracteristicas/${a._id}`}>
                <button className="py-2 px-4 bg-[#832780] text-white rounded hover:bg-[#b059d7] active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                  Ver Más{" "}
                </button>
              </LinkRouter>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Computadoras;
