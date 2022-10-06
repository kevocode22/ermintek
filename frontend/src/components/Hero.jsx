import React from 'react'
import '../styles/index.css'

const Hero = () => {

  return (

    <aside>
      <div className="w-full sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-[#04AAA0] p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="cardSteps mx-auto max-w-xl text-center">
              <h2 className="text-xl text-dark md:text-2xl">
                Tienda online de celulares e informática
              </h2>

              <p className="text-white/90 sm:mt-4 sm:block">
                Te ofrecemos las mejores marcas, atención personalizada, los mejores precios, y lo mejor de todo, desde la comodidad de tu hogar.
              </p>

              <div className="buttonCta mt-4 md:mt-8">
                <a
                  href="#"
                  className="buttonCta inline-block rounde bg-teal-700 px-12 py-3 text-sm font-medium transition hover:bg-[#315659] focus:ring focus:ring-teal-700"
                >
                  Empezá tu experiencia!
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Student"
              src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Student"
              src="https://img.freepik.com/free-photo/cheerful-african-girl-casual-clothes-hold-laptop-pc-computer-with-blank-empty-screen-isolated-blue-turquoise-background-studio-people-sincere-emotions-lifestyle-concept-mock-up-copy-space_365776-5869.jpg?w=2000"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </aside>

  )
}

export default Hero

