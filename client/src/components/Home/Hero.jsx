import React from 'react'
import '../../styles/index.css'
import 'tw-elements';
import 'animate.css';

const Hero = () => {

  return (

    <div id="carouselExampleCaptions" className="carousel slide relative pt-28" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-2">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className='pt-4'
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://i.imgur.com/kBnwRmv.png"
            className="block w-full object-cover animate__animated animate__zoomIn"
            alt="..."
            style={{ "height": "33rem", "width": "100%", paddingBottom: "5rem"}}
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h2 className='font-["Fjalla_One"] text-5xl leading-tight text-[#8643a3] shadowText'>TIENDA ONLINE DE CELULARES</h2>
            
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://i.imgur.com/VeInOdG.png"
            className="block w-full object-contain animate__animated animate__zoomIn"
            alt="..."
            style={{ "height": "33rem", "width": "100%" }}
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h2 className='font-["Fjalla_One"] text-5xl leading-tight text-[#ff9504] shadowText'>NOTEBOOKS Y PC DE ESCRITORIO</h2>
          </div>
        </div>
      </div>
   
    </div>

  )
}

export default Hero

