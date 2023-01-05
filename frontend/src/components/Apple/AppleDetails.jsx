import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import macActions from "../../redux/actions/macBooksActions";
import axios from "axios";
import "../CellPhones/cellphones.css";
import { NumericFormat } from "react-number-format";

const DetailsCellPhone = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dolar, setDolar] = useState([]);
  const { id } = useParams();
  const detailsCell = useSelector((store) => store.celularesReducer.oneCelular);
  const { image, details, ...props } = detailsCell;

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
      <section>
        <button
          onClick={() => navigate("/celulares")}
          className="bg-orange-500 rounded-sm text-white button px-3 m-4 text-xl shadow-emerald-300 fixed z-10"
        >
          {`< Volver`}
        </button>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Foto principal de celular"
                src={image?.img1}
                className="aspect-square w-full rounded-xl object-cover"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="Foto secundaria celular"
                  src={image?.img2}
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Foto terciaria celular"
                  src={image?.img3}
                  className="aspect-square w-full rounded-xl object-cover"
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
                    <h3 className="text-white">Características</h3>
                    {props.features?.map((f) => (
                      <p className="text-white">
                        Pantalla:{f.Pantalla} <br />
                        Procesador:{f.Procesador} <br />
                        RAM:{f.RAM} <br />
                        Almacenamiento:{f.Almacenamiento} <br />
                        Expansión:{f.Expansion} <br />
                        Cámara:{f.Cámara} <br />
                        Batería:{f.Batería} <br />
                        OS:{f.OS} <br />
                      </p>
                    ))}
                  </div>
                  <h3 className="text-white">Precios</h3>
                  {details?.map((d, index) => (
                    <ol
                      key={index}
                      className="flex justify-start flex-col text-white bg-black rounded-md"
                    >
                      <ul>
                        -Versión {d.Ram}GB RAM / {d.Storage}GB ALMACENAMIENTO:{" "}
                        <br />
                        <NumericFormat
                          value={d.Price * 0.25 + d.Price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={" USD "}
                          className="text-xl font-semibold"
                        />
                        {" |"}
                        <NumericFormat
                          value={(d.Price * 0.25 + d.Price) * dolar}
                          displayType={"text"}
                          thousandSeparator={true}
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
