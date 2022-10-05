import React from 'react'
import 'tw-elements';


const Carousel = () => {

    return (
<div
  id="carouselExampleCrossfade"
  className="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden max-h-96">
    <div className="carousel-item active float-left w-full">
      <img
        src="https://www.cronista.com/files/image/101/101658/5ff7362c78656.jpg"
        className="block w-full"
        alt="Cellphones"
      />
   <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Tienda de Celulares e Informática</h5>
        <p>Encontrá las mejores marcas a los mejores precios</p>
      </div>
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://www.cronista.com/files/image/419/419139/61d3378d218ac.jpg"
        className="block w-full"
        alt="Celulares"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://www.veintitres.com.ar/__export/1649106828043/sites/cronica/img/2022/04/04/telefonos_x1x_crop1649106374314.jpg?__scale=c:transparent,w:NaN,h:732,t:3,p:0,q:80"
        className="block w-full"
        alt="Informática"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousel
