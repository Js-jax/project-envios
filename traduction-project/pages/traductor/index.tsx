import Image from "next/image";
import Layout from "@/components/layout";

import image1 from "@/assets/undrawcontractreves9-1.webp";

import services1 from "@/assets/path8014.webp";
import services2 from "@/assets/layer1-9bD.webp";
import services3 from "@/assets/layer1.webp";

export default function Traduction() {
  return (
    <Layout>
      {
        <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:pt-24 lg:px-8">
          <div className="relative isolate pt-14">
            <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
              {/* First Header */}
              <div className="mx-auto max-w-2xl lg:mt-0 lg:flex-auto">
                <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  ¿Necesitas traducir documentos importantes con rapidez y
                  precisión?
                </h1>
                <p className="mt-6 text-md text-gray-400">
                  Del Campo Capital Humano le ofrecemos el mejor servicio de
                  traducción de documentos, con la garantía de calidad y
                  confidencialidad que usted necesita.
                </p>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <Image src={image1} alt="" className="w-52 mx-auto" />
              </div>
            </div>
          </div>
          <div className="relative isolate pt-14">
            <div className="mx-auto max-w-7xl px-8 lg:px-16">
              <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col items-start bg-white shadow-md border rounded-xl px-4 py-8 text-center">
                  <h3 className="text-2xl font-bold tracking-tight text-blue-300 text-center">
                    ¡Solicita una cotización hoy mismo y traduce tu documento
                    con la mejor calidad y precio!
                  </h3>
                  <h5 className="text-xl font-bold tracking-tight text-gray-600 text-center mt-8 mx-auto">
                    ¿Qué tipo de traducción necesitas?
                  </h5>
                  {/* <div className="grid grid-cols-1 md:grid-cols-2"></div> */}
                </div>
                <div className="flex flex-col items-start justify-between bg-white shadow-md border rounded-xl px-4 py-8">
                  {/* Formulario */}
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
                    ¡No esperes más y traduce tu documento hoy mismo!
                  </h3>
                  <form action="https://formsubmit.co/albertoglg12@hotmail.com" method="POST" className="w-full">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-900" aria-required
                      >
                        Nombre
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900" aria-required
                      >
                        Correo Electronico
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          autoComplete="given-name"
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
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
              <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
                <div className="mx-auto max-w-xl lg:max-w-none">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Nuestros servicios abarcan una amplia gama de soluciones
                      personalizadas para satisfacer tus necesidades
                    </h2>
                  </div>
                  <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
                    <div className="border rounded-xl bg-gray-100 py-5 px-5 shadow-md text-center sm:flex sm:text-left lg:block lg:text-center">
                      <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                          <Image
                            className="mx-auto h-48 w-36"
                            src={services1}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-xl font-medium text-gray-900">
                          Profesionales especializados
                        </h3>
                        <p className="mt-2 my-auto text-md text-gray-500">
                          Asegurando una traducción precisa para cualquier tipo
                          de documento.
                        </p>
                      </div>
                    </div>
                    <div className="border rounded-xl bg-gray-100 py-5 px-5 shadow-md text-center sm:flex sm:text-left lg:block lg:text-center">
                      <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                          <Image
                            className="mx-auto h-48 w-40"
                            src={services2}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-xl font-medium text-gray-900">
                          Control de calidad
                        </h3>
                        <p className="mt-2 my-auto text-md text-gray-500">
                          Tu satisfacción es primordial, por eso aplicamos un
                          riguroso proceso control de calidad.
                        </p>
                      </div>
                    </div>
                    <div className="border rounded-xl bg-gray-100 py-5 px-5 shadow-md text-center sm:flex sm:text-left lg:block lg:text-center">
                      <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                          <Image
                            className="mx-auto h-48 w-40"
                            src={services3}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-xl font-medium text-gray-900">
                          Comunicación efectiva
                        </h3>
                        <p className="mt-2 text-md text-gray-500 my-auto">
                          Entendemos tus necesidades manteniendo una
                          comunicación constante y abierta contigo durante todo
                          el proceso.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      }
    </Layout>
  );
}
