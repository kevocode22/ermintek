import React from 'react'
import '../styles/index.css'

const Steps = () => {

    const posts = [
        {
            title: "PASO 1: Buscá tu producto y agregalo al carrito",
            img: "https://i.imgur.com/kTh1Aio.png",
            content: "Mirá las características y especificaciones del producto y agregalo al carrito de compras."
        },
        {
            title: "PASO 2: Seleccioná el medio de pago",
            img: "https://i.imgur.com/7oeUkhs.png",
            content: "Podés pagar en efectivo, con transferencia o criptomonedas! También en cuotas con débito en Wibond próximamente!"
        },
        {
            title: "PASO 3: Contactate con nosotros",
            img: "https://i.imgur.com/uX3O0Rq.png",
            content: "Escribinos por whatsapp o envianos un email para concretar el pago y coordinar el envío."
        },
        {
            title: "PASO 4: Esperá que te llegue",
            img: "https://i.imgur.com/wn3RB1N.png",
            content: "Envíos a todo el país, máximo 1 semana para entrega. En CABA, los envíos pueden ser de un día para el otro dependiendo el producto solicitado."
        },
    ];

    return (
        <>
            <h2 className="text-center text-4xl text-white mt-10 p-4 font-['Bebas_Neue']">¿Cómo funciona?</h2>
            <div className="grid gap-2 lg:grid-cols-4 shadow-md text-center m-4 text-white">
                {posts.map((items, key) => (
                    <div className="w-full rounded-xl shadow-xl lg:max-w-sm p-7 text-white bg-[#25303194]" key={key}>
                        <img
                            className="object-cover w-full md:max-h-56 p-4"
                            src={items.img}
                            alt="Pasos para la compra"
                        />
                        <div className="cardSteps p-4 text-white">
                            <h4 className="text-2xl font-['Bebas_Neue']">
                                {items.title}
                            </h4>
                            <p className="text-white font-['Oswald']">
                                {items.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Steps