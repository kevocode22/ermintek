import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import macActions from "../../redux/actions/macBooksActions";
import axios from "axios";
import "../CellPhones/cellphones.css";
import { NumericFormat } from "react-number-format";

const DetailsCellPhone = () => {
  window.scrollTo({ top: 0, behavior: "smooth", animation: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dolar, setDolar] = useState([]);
  const { id } = useParams();
  const oneProductDetails = useSelector(
    (store) => store.macBooksReducer.oneProduct
  );
  const { image, details, ...props } = oneProductDetails;

  useEffect(() => {
    dispatch(macActions.getOneAppleProd(id));
    axios
      .get("https://api.bluelytics.com.ar/v2/latest")
      .then((res) => {
        const apiResponse = res.data.blue;
        setDolar(apiResponse.value_sell);
      })
      .catch((error) => {
        console.error(error);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="pt-28">
        <button
          onClick={() => navigate("/apple")}
          className="bg-[#832780] rounded-sm text-white button px-3 m-4 text-xl shadow-emerald-300 fixed z-10"
        >
          {`< Volver`}
        </button>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Foto principal de celular"
                src={image?.img1}
                className="aspect-square w-full rounded-xl object-contain"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="Foto secundaria celular"
                  src={image?.img2}
                  className="aspect-square w-full rounded-xl object-contain"
                />

                <img
                  alt="Foto terciaria celular"
                  src={image?.img3}
                  className="aspect-square w-full rounded-xl object-contain"
                />
              </div>
            </div>

            <div className="sticky top-0">
              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold text-white">
                    {props?.name}
                  </h1>
                  <br />

                  <p className="mt-0.5 text-sm text-gray-400">
                    {"props"?.description}
                  </p>
                </div>

                <p className="text-lg font-bold text-orange-500">
                  {props?.brand}
                </p>
              </div>
              <div>
                <div className="prose max-w-none text-white">
                  <p>{props?.description}</p>
                  <div>
                    <h3 className="text-white">Caracter??sticas</h3>
                    {props.features?.map((f, index) => (
                      <p key={index} className="text-white">
                        Pantalla:{f?.Pantalla} <br />
                        Procesador:{f?.Procesador} <br />
                        RAM:{f?.RAM} <br />
                        Almacenamiento:{f?.Almacenamiento} <br />
                        Expansi??n:{f?.Expansion} <br />
                        C??mara:{f?.C??mara} <br />
                        Bater??a:{f?.Bater??a} <br />
                        OS:{f?.OS} <br />
                      </p>
                    ))}
                  </div>
                  <h3 className="text-white">Precios</h3>
                  {details &&
                    details.map((d, index) => (
                      <ol
                        key={index}
                        className="flex justify-start flex-col text-white bg-black rounded-md"
                      >
                        <ul>
                          -Versi??n {d.Ram}GB RAM / {d.Storage}GB ALMACENAMIENTO:{" "}
                          <br />
                          <NumericFormat
                            value={d.Price * 0.12 + d.Price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={" USD "}
                            decimalScale={0}
                            className="text-xl font-semibold"
                          />
                          {" |"}
                          <NumericFormat
                            value={(d.Price * 0.12 + d.Price) * dolar}
                            displayType={"text"}
                            thousandSeparator={true}
                            decimalScale={0}
                            prefix={" ARS "}
                            className="text-xl font-semibold"
                          />
                        </ul>
                      </ol>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsCellPhone;
