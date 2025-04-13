import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fondo2 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Portfolio Sofía Pimentel Acuña</p>
          </div>

          <div className="text-sm">
            &copy; {currentYear} Todos los derechos reservados
          </div>

          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#home"
                  className="hoverletra transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hoverletra transition-colors"
                >
                  ¿Quién soy?
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hoverletra transition-colors"
                >
                  Mis Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hoverletra transition-colors"
                >
                  Contáctame
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
