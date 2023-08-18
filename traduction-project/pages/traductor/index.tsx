import Image from "next/image";
import Layout from "@/components/layout";

import image1 from "@/assets/undrawcontractreves9-1.webp";

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
                <Image src={image1} alt="" className="w-52 mx-auto"/>
              </div>
            </div>
          </div>
        </main>
      }
    </Layout>
  );
}
