import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo1 from "@/assets/logo/logo_1.png";
import assist1 from "@/assets/asistente.webp";
import assist2 from "@/assets/asistente1.webp";
import assist3 from "@/assets/asistente2.webp";
import assist4 from "@/assets/asistente3.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-8 sm:pt-24 lg:px-8">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-4 max-w-5xl lg:mx-8 lg:flex-auto">
            <h1 className="max-w-5xl text-6xl font-bold tracking-tight text-gray-900 sm:text-6.5xl text-left mx-auto">
              Ayuda profesional
            </h1>
            <p className="max-w-3xl mt-6 text-xl text-left leading-8 text-gray-600">
              Obtenga la ayuda que necesita para liberar el potencial de su
              firma, apóyese en profesionales que le brindará soporte en su
              operación.
            </p>
            <div className="bg-sky-400 p-4 mt-5 border rounded-xl">
              <p className="max-w-4xls text-md text-left font-bold text-white">
                Del Campo esta aqui para apoyarte con el talento, comienza con
                tu asistente hoy.
              </p>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            {/* <Image/> */}
            <Image
              src={assist1}
              alt="Asistente 1"
              className="w-60 border rounded-lg mx-24"
            />
          </div>
        </div>
      </div>
      <div className="relative isolate pt-14 my-10">
        <div className="mx-auto max-w-6xl flex items-center">
          <h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl mx-auto text-center">
            Estas son algunas tareas que puede realizar su asistente legal
            virtual
          </h2>
        </div>
        <div className="mx-auto my-12 max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mt-16 sm:mt-24 lg:mt-2 lg:flex-shrink-0 lg:flex-grow">
            {/* <Image/> */}
            <Image
              src={assist2}
              alt="Asistente 1"
              className="w-52 border rounded-lg mx-auto"
            />
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="bg-gray-200 border rounded-xl shadow-md py-4 px-5 w-full my-5">
              <p className="text-center text-gray-600 font-">
                Recepcionista Legal
              </p>
            </div>
            <div className="bg-gray-200 border rounded-xl shadow-md py-4 px-5 w-full my-5">
              <p className="text-center text-gray-600">Asistente Legal</p>
            </div>
            <div className="bg-gray-200 border rounded-xl shadow-md py-4 px-5 w-full my-5">
              <p className="text-center text-gray-600">Traducciones</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate pt-14 my-10">
        <div className="mx-auto max-w-6xl flex items-center">
          <h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl mx-auto text-center">
            ¿Por qué nuestro asistente virtual?
          </h2>
        </div>
        <div className="mx-auto my-6 max-w-9xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mt-8 mx-auto sm:mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="mx-auto">
              <div className="w-60 h-60 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center font-bold text-2xl">
                  Relación coste-beneficio
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-60 h-60 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center font-bold text-2xl">Bilingual</p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-60 h-60 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center font-bold text-2xl">
                  Proceso de contratación rápido y eficiente
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-60 h-60 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center font-bold text-2xl">Personal capacitado</p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-60 h-60 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white  text-center font-bold text-2xl">Part-time & Full-time</p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-60 h-60 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center font-bold text-2xl">Month to month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate pt-14 my-10" id="ls">
        <div className="mx-auto max-w-7xl flex items-center">
          
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl mx-auto text-center">
            Escuchamos, atendemos y ofrecemos: <br />
            Servicio adaptado a tus necesidades.
          </h2>
        </div>
        <div className="mx-auto my-6 max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mt-8 mx-auto sm:mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
            <div className="mx-auto my-auto">
              <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-lg md:text-2xl text-center flex justify-center items-center">
                Queremos conocer tus necesidades y objetivos para poder diseñar
                un plan a tu medida, contáctanos hoy mismo.
              </h3>
            </div>
            <div className="rounded-xl border-dashed border-4 p-6 flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="border rounded-full p-8 h-40 w-40 bg-gray-100 shadow-md my-8 flex items-center justify-center">
                  <Image
                    src={logo1}
                    alt="Logo principal"
                    className="w-32 h-20 mx-auto my-auto"
                  />
                </div>
                <div className="mx-auto">
                  <p className="text-md text-center text-gray-700">
                    !Hola! Soy LEAH y estoy aqui para entender tus dudas. Puedo
                    responder preguntas y proporcionarte información general de
                    nuestros servicios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
