import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import assist1 from "@/assets/asistente.webp";
import assist2 from "@/assets/asistente1.webp";
import assist3 from "@/assets/asistente2.webp";
import assist4 from "@/assets/asistente3.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-8 sm:pt-24 lg:px-8">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ayuda profesional
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Obtenga la ayuda que necesita para liberar el potencial de su
              firma, apóyese en profesionales que le brindará soporte en su
              operación.
            </p>
            <p className="mt-6 text-md text-gray-400">
              Del Campo esta aqui para apoyarte con el talento, comienza con tu
              asistente hoy.
            </p>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            {/* <Image/> */}
            <Image
              src={assist1}
              alt="Asistente 1"
              className="w-52 border rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative isolate pt-14 my-10">
        <div className="mx-auto max-w-2xl flex items-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">
            Estas son algunas tareas que puede realizar su asistente legal
            virtual
          </h2>
        </div>
        <div className="mx-auto my-12 max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
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
        <div className="mx-auto max-w-2xl flex items-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">
            ¿Por qué nuestro asistente virtual?
          </h2>
        </div>
        <div className="mx-auto my-6 max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mt-8 mx-auto sm:mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="mx-auto">
              <div className="w-40 h-40 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center">
                  Relación coste-beneficio
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-40 h-40 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center">Bilingual</p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-40 h-40 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center">
                  Proceso de contratación rápido y eficiente
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-40 h-40 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center">Personal capacitado</p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-40 h-40 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center">Part-time & Full-time</p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="w-40 h-40 flex flex-col justify-center items-center bg-sky-400 border rounded-full p-8 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                <p className="text-white text-center">Month to month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate pt-14 my-10">
        <div className="mx-auto max-w-7xl flex items-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">
            Escuchamos, atendemos y ofrecemos: <br />
            Servicio adaptado a tus necesidades.
          </h2>
        </div>
        <div className="mx-auto my-6 max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mt-8 mx-auto sm:mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
            <div className="mx-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-xl">
                Queremos conocer tus necesidades y objetivos para poder diseñar
                un plan a tu medida, contáctanos hoy mismo.
              </h3>
            </div>
            <div className="rounded-xl border-dashed border-4 p-6 flex flex-col justify-center items-center"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

