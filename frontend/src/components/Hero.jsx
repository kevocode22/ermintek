import React from 'react'
import '../styles/index.css'
import Iphone from '../assets/iphone14proMax.png'
const Hero = () => {

  return (

    <aside>
      <div className="w-full sm:px-6 lg:px-8">
       <div className='w-full flex justify-center items-center'>
        <div className='text-white  text-5xl text-center w-1/2'> <h2 className='font-["Fjalla_One"] text-8xl leading-tight'>TIENDA DE CELULARES E INFORMÁTICA</h2>
        <h3 className='text-4xl font-["Bebas_Neue"]'>Las mejores marcas y los mejores precios</h3></div>
        <div><img src={Iphone} alt="" style={{"height":"30rem"}} /></div>
     
       </div>
      </div>
    </aside>

  )
}

export default Hero

