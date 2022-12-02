import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import celularesActions from "../../redux/actions/celularesActions";

const DetailsCellPhone = () => {
  const [celular, setCelular] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const detailsCell = useSelector((store) => store.celularesReducer.oneCelular);
  const { image, price, ...props } = detailsCell;

  useEffect(() => {
    dispatch(celularesActions.getOneCelular(id));
    setCelular(Object.values(price));
    //eslint-disable-next-line
  }, []);

  console.log(celular);

  return (
    <>
      <section>
        <button
          onClick={() => navigate("/celulares")}
          className="bg-orange-500 rounded-sm text-white button px-3 m-4 text-xl shadow-emerald-300 fixed z-10"
        >
          {" "}
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
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src=""
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
                  <p>{props.description}</p>

                  <select className="flex columns-1 text-black">
                    {celular?.map(
                      (a) =>
                        a !== null && (
                          <option value="" className="text-black">
                            USD {a}
                          </option>
                        )
                    )}
                  </select>
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
