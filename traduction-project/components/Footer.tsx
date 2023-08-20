"use client";
import Image from "next/image";
import logo1 from "@/assets/logo/logo_1.png";
import logo2 from "@/assets/logo/logo_2.png";

export default function Footer() {
  return (
    <footer className="footer-bg" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl p-8 sm:pt-24 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* <Image src={logo1} alt={'Del Campo Capital Humano'}/> */}
            <Image
              src={logo2}
              alt={"¿Te gustaria hablar con un representante?"}
              className="w-52"
            />
            <form action="https://formsubmit.co/albertoglg12@hotmail.com" method="POST" className="w-full">
                    <div>
                      <label
                        htmlFor="Nombre"
                        className="block text-sm font-semibold leading-6 text-white" aria-required
                      >
                        Nombre
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          placeholder="Nombre Completo"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-semibold leading-6 text-white"
                        aria-required>
                       Teléfono
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="number"
                          name="teléfono"
                          id="telefono"
                          autoComplete="given-name"
                          placeholder="Teléfono"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-white"
                        aria-required>
                        Correo 
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="Correo"
                          id="email"
                          autoComplete="given-name"
                          placeholder="Correo electrónico"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-semibold leading-6 text-white" aria-required
                      >
                        Mensaje
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="Mensaje"
                          id="mensaje"
                          autoComplete="given-name"
                          placeholder="Mensaje"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 block w-full rounded-lg footer-bg px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                    >
                      Enviar
                    </button>
                               <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                              <input type="hidden" name="_captcha" value="false"></input>
                  </form>
          </div>
          {/* <img
              className="h-7"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Company name"
            /> */}
            
          <div className="md:gap-8">
            <div className="gap-8">
              {/* <h3 className="text-md font-semibold leading-6 text-white">
                Nombre completo
              </h3>
              <div className="space-y-5">
                <p className="text-sm leading-6 text-white hover:text-gray-50">
                  contacto@delcampoch.com
                </p>
              </div> */}
               

              <div className="mt-10 md:mt-5">
                <h3 className="text-md font-semibold leading-6 text-white">
               Contacto
                </h3>
                <div className="space-y-5">
                  <p className="text-sm leading-6 text-white hover:text-gray-50">
                  contacto@delcampoch.com
                  </p>
                </div>
              </div>
              <div className="mt-10 md:mt-5">
                <h3 className="text-md font-semibold leading-6 text-white">
                  Ubicación
                </h3>
                <div className="space-y-5">
                  <p className="text-sm leading-6 text-white hover:text-gray-50">
                    Insurgentes Sur 682 Col. Del Valle alcaldía Benito Juarez
                    CP. 03100 CDMX.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 md:mt-5">
                <h3 className="text-md font-semibold leading-6 text-white">
                  Tel. Oficina
                </h3>
                <div className="space-y-5">
                  <p className="text-sm leading-6 text-white hover:text-gray-50">
                   55-89-54-90-78
                  </p>
                </div>
              </div>

              <div className="mt-10 md:mt-5">
                <h3 className="text-md font-semibold leading-6 text-white">
                 Tel. Celular
                </h3>
                <div className="space-y-5">
                  <p className="text-sm leading-6 text-white hover:text-gray-50">
                  55-89-54-90-78 / 55-89-54-90-79
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="border rounded-lg md:gap-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4141761738824!2d-99.17457442567401!3d19.394502741898147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff723f748b37%3A0xfb665b456f4afbe3!2sAv.%20Insurgentes%20Sur%20682%2C%20Col%20del%20Valle%20Nte%2C%20Benito%20Ju%C3%A1rez%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1691136614806!5m2!1ses-419!2smx"
              loading="lazy"
              className="w-full h-70"
            ></iframe>
          </div>
        </div>
        {/* Derechos de creacion */}
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))} */}
          </div>
          

          <p className="mt-8 text-xs leading-5 text-white md:order-1 md:mt-0">
            &copy; 2023 Tekamon117, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
