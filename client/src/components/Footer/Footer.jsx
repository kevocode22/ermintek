import React from "react";
import Logo from "../../assets/Logos/logoLightTransparent.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0000008e] text-white font-['Oswald']">
      <div className="mx-auto w-full px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-center text-white">
          <Link to="/home">
            {" "}
            <img src={Logo} className="h-28" alt="Ermintek Logo" />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
          Tienda online de celulares y productos de informática.
        </p>

        <nav className="mt-12" aria-labelledby="footer-navigation">
          <h2 className="sr-only" id="footer-navigation">
            Footer navigation
          </h2>

          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-white">
            <li>
              <a className="transition hover:text-[#b331ae]" href="/">
                Sobre Nosotros
              </a>
            </li>
            <Link to="/celulares">
              <li>
                <a className="transition hover:text-[#b331ae]" href="/">
                  Celulares
                </a>
              </li>
            </Link>
            <Link to="/computadoras">
              <li>
                <a className="transition hover:text-[#b331ae]" href="/">
                  Computadoras
                </a>
              </li>
            </Link>

            <li>
              <a className=" transition hover:text-[#b331ae]" href="/">
                Apple
              </a>
            </li>
          </ul>
        </nav>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://facebook.com/ermintek"
              rel="noreferrer"
              target="_blank"
              className="text-gray-400 transition hover:text-[#b331ae]"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-400 transition hover:text-[#b331ae]"
            >
              <span className="sr-only text-white">Whatsapp</span>
              AiOutlineWhatsApp
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
