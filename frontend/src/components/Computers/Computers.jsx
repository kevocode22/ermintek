import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import imageAside from '../../assets/manWithPc.png'
import cartActions from '../../redux/actions/cartActions'
import toast from 'react-hot-toast';
import { Link as LinkRouter } from 'react-router-dom'
import axios from 'axios'
import { NumericFormat } from 'react-number-format'

const Computadoras = () => {

    const navigate = useNavigate()
    const [reload, setReload] = useState(false)
    const user = useSelector(store => store.usuariosReducer.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const computers = useSelector(store => store.laptopsReducer.laptops.laptops)
    const [dolar, setDolar] = useState([])

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    async function añadirProducto(event) {
        if (user) {
            const idProducto = event.target.id
            console.log(idProducto)
            let res = dispatch(cartActions.addProduct(idProducto))
            console.log(res)
           let userProd = dispatch(cartActions.getUserProducts())
           console.log(userProd)
            setReload(!reload)
        } else {
            toast.error("Primero Inicie Sesion")
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate("/account")
            }, 1500)
        }
    }

    useEffect(() => {
        axios.get("https://api.bluelytics.com.ar/v2/latest")
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
        <section className='flex justify-center flex-wrap p-10 w-full'>
   <div className="text-center lg:text-left rounded bg-[#1412a0c5] p-8 m-1 text-white">
                    <img src={imageAside} alt="Man grabbing a laptop" style={{ height: "20rem",width:"15rem", objectFit:"cover"}} />
                    <h2 className="text-2xl font-bold">Computadoras</h2>
                    <p className="mt-4 max-w-[45ch] text-sm">
                        HP, Dell, Asus, Lenovo y más!
                    </p>
                </div>
                    
            {computers?.map((a, index) =>
                <div key={index} className="w-60 bg-white shadow rounded m-1">
                 
                    <div
                        className="h-80 w-full bg-gray-200 flex flex-col justify-between p-2 bg-contain bg-no-repeat bg-center object-cover"
                        style={{ backgroundImage: `url(${a.image?.img1})` }}
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
                            {a?.brand}
                        </p>
                        <h1 className="text-gray-500 text-center mt-1 text-xl">{a?.name}</h1>
                        <h2 className="text-orange-600 text-center drop-shadow-md mt-1 text-xl">{a?.model}</h2>
                        <NumericFormat
                          value={(a?.price * 0.13 + a?.price) * dolar}
                          displayType={"text"}
                          thousandSeparator={true}
                          decimalScale={0}
                          prefix={" ARS "}
                          className="text-xl font-semibold"
                        />
                        <LinkRouter to={`caracteristicas/${a?._id}`}>
                <button className="py-2 px-4 bg-[#e46804] text-white rounded hover:bg-orange-400 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
Ver Más                </button>
              </LinkRouter>
                    </div>
                </div>)}
        </section>
    )
}

export default Computadoras

