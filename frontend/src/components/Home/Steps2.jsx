import React from 'react'
import backGround from '../../assets/BG-7.jpg'
import 'animate.css';

const Steps2 = () => {
  return (
    <div className="containerSteps mx-auto p-4 lg:p-5 " >
      <div className="grid gap-8 sm:grid-col-2 lg:grid-cols-4 md:grid-cols-2  h-min">
        <div className="cardHome overflow-hidden rounded-2xl p-4 lg:p-3 shadow-lg shadow-orange-500 animate__animated.animate__bounce" style={{backgroundImage:`url(${backGround})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}} >
          <div className="flex items-center text-orange-400">
            <p className="text-sm font-bold uppercase">PASO 1</p>
    
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokelinecapcap="round" strokelinecapjoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
    
          <h2 className="mt-4 text-3xl font-semibold text-white">Encontrá el producto que buscás en el catálogo. Encontrarás sus características y especificaciones.</h2>
    
    
          <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-90">
            <img src='https://i.imgur.com/wPPQQJ7.png'  alt="paso1" style={{objectFit:"contain"}}></img>
          </div>
        </div>
    
        <div className="overflow-hidden rounded-2xl p-4 lg:p-3 shadow-lg shadow-orange-500" style={{backgroundImage:`url(${backGround})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
          <div className="flex items-center text-orange-400">
            <p className="text-sm font-bold uppercase">PASO 2</p>
    
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokelinecapcap="round" strokelinecapjoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
    
          <h2 className="mt-4 text-3xl font-semibold text-white">Podés elegir el medio de pago que prefieras: Efectivo, transferencia y criptomonedas!</h2>
    
    
          <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-90">
          <img src='https://i.imgur.com/IqM8gbE.png' alt="paso1" style={{objectFit:"contain"}}></img>

          </div>
        </div>

        <div className="overflow-hidden rounded-2xl p-4 lg:p-3 shadow-lg shadow-orange-500" style={{backgroundImage:`url(${backGround})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
          <div className="flex items-center text-orange-400">
            <p className="text-sm font-bold uppercase">PASO 3</p>
    
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokelinecapcap="round" strokelinecapjoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
    
          <h2 className="mt-4 text-3xl font-semibold text-white">Contactate con nosotros mediante llamada o Whatsapp para coordinar medios de pago y tiempo de entrega. Se te entregará un comprobante de tu compra.</h2>
    
    
          <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-90">
          <img src='https://i.imgur.com/dWEIi2T.png' alt="paso1" style={{objectFit:"contain"}}></img>

          </div>
        </div>

        <div className="overflow-hidden rounded-2xl  p-4 lg:p-3 shadow-lg shadow-orange-500" style={{backgroundImage:`url(${backGround})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
          <div className="flex items-center text-orange-400">
            <p className="text-sm font-bold uppercase">PASO 4</p>
    
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokelinecapcap="round" strokelinecapjoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
    
          <h2 className="mt-4 text-3xl font-semibold text-white">Esperá en la comodidad de tu casa. Hacemos envíos a todo el país. Dentro de CABA, los envíos son gratuitos. </h2>
    
          <p className="mt-4 text-lg text-white"></p>
    
          <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-90">
          <img src='https://i.imgur.com/OxrtZhV.png' alt="paso1" style={{objectFit:"contain"}}></img>

          </div>
        </div>
    
    
      </div>
    </div>
  )
}

export default Steps2