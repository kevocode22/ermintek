import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import computersActions from "../../redux/actions/laptopsActions";
import axios from "axios";
import "../Computers/computers.css";
import { NumericFormat } from "react-number-format";

const DetailsCellPhone = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dolar, setDolar] = useState([]);
  const { id } = useParams();
  const detailsComputer = useSelector(
    (store) => store.laptopsReducer.oneLaptop
  );

  const { image, description, ...props } = detailsComputer;
  useEffect(() => {
    dispatch(computersActions.getOneLaptop(id));
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
    <>
      <section className="pt-28">
        <button
          onClick={() => navigate("/computadoras")}
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
                <div className="max-w-[80ch]">
                  <h1 className="text-2xl font-bold text-white">
                    {props?.name}
                  </h1>
                  <br />
                  <div className="mt-0.5 text-sm text-white w-full">
                    <p className="">{description?.p1}</p> <br />
                    <p>{description?.p2}</p>
                    <br />
                    <p>{description?.p3}</p>
                  </div>
                </div>

                <p className="text-lg font-bold text-orange-500">
                  {props?.brand}
                </p>
              </div>
              <div>
                <div className="prose max-w-none text-white">
                  <div>
                    <h3 className="text-white">Características</h3>
                    {props.features?.map((f) => (
                      <p className="text-white">
                        Pantalla: {f.Pantalla} <br />
                        Procesador: {f.Procesador} <br />
                        Gráficos: {f.Graficos} <br />
                        RAM: {f.RAM} <br />
                        Almacenamiento: {f.Almacenamiento} <br />
                        OS: {f.OS} <br />
                        Código: {f.Código}
                      </p>
                    ))}
                  </div>
                  <h3 className="text-white">Precio</h3>

                  <ol className="flex justify-start flex-col text-white bg-black rounded-md">
                    <ul>
                      {" "}
                      <NumericFormat
                        value={props.price * 0.2 + props.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        decimalScale={0}
                        prefix={" USD "}
                        className="text-xl font-semibold"
                      />
                      {" |"}
                      <NumericFormat
                        value={(props.price * 0.12 + props.price) * dolar}
                        displayType={"text"}
                        thousandSeparator={true}
                        decimalScale={0}
                        prefix={" ARS "}
                        className="text-xl font-semibold"
                      />
                    </ul>
                  </ol>
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
