import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import celularesActions from "../../redux/actions/celularesActions";

const DetailsCellPhone = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const {id} = useParams()

 const celularId = useSelector((store) => store.celularesReducer.oneCelular)
 useEffect(()=>{
 let res = dispatch(celularesActions.getOneCelular(id))
 console.log(res)
  //eslint-disable-next-line
 },[])

console.log(celularId)

  return (
    <>
      <section>
      <button onClick={() => navigate('/celulares')} className="bg-orange-500 rounded-sm text-white button px-3 m-4 text-xl shadow-emerald-300 fixed z-10"> {`< Volver`}</button>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Foto principal de celular"
                src={celularId.image.img1}
                className="aspect-square w-full rounded-xl object-cover"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="Foto secundaria celular"
                  src={celularId.image.img2}
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
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pre Order
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold text-white">
                    {celularId.name}
                  </h1>

                  <p className="mt-0.5 text-sm text-gray-400">{celularId.brand}</p>

                </div>

                <p className="text-lg font-bold">$Precios</p>
              </div>

              <details className="group relative mt-4">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden text-white">
                      <p>
                        {celularId.description}
                      </p>
                    </div>

                    <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div className="prose max-w-none pb-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam sapiente nobis ea veritatis error consequatur
                    nisi exercitationem iure laudantium culpa, animi temporibus
                    non! Maxime et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="color"
                          id="color_tt"
                          className="peer sr-only"
                        />

                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Texas Tea
                        </span>
                      </label>

                      <label htmlFor="color_fr" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="color"
                          id="color_fr"
                          className="peer sr-only"
                        />

                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Fiesta Red
                        </span>
                      </label>

                      <label htmlFor="color_cb" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="color"
                          id="color_cb"
                          className="peer sr-only"
                        />

                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Cobalt Blue
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Size</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_xs"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          XS
                        </span>
                      </label>

                      <label htmlFor="size_s" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_s"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          S
                        </span>
                      </label>

                      <label htmlFor="size_m" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_m"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          M
                        </span>
                      </label>

                      <label htmlFor="size_l" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_l"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          L
                        </span>
                      </label>

                      <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_xl"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          XL
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div className="mt-8 flex">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>

                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsCellPhone;
