"use client";
import Image from "next/image";
import logo1 from "@/assets/logo/logo_1.png";
import logo2 from "@/assets/logo/logo_2.png";

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl p-8 sm:pt-24 lg:px-8 lg:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* <Image src={logo1} alt={'Del Campo Capital Humano'}/> */}
            <Image
              src={logo2}
              alt={"Del Campo Capital Humano"}
              className="w-52"
            />
          </div>
          {/* <img
              className="h-7"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Company name"
            /> */}
          <div className="md:gap-8">
            <div className="gap-8">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Contacto
              </h3>
              <div className="space-y-5">
                <p className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                  contacto@delcampoch.com
                </p>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Ubicación
                </h3>
                <div className="space-y-5">
                  <p className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Insurgentes Sur 682 Col. Del Valle alcaldía Benito Juarez
                    CP. 03100 CDMX.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg md:gap-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4141761738824!2d-99.17457442567401!3d19.394502741898147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff723f748b37%3A0xfb665b456f4afbe3!2sAv.%20Insurgentes%20Sur%20682%2C%20Col%20del%20Valle%20Nte%2C%20Benito%20Ju%C3%A1rez%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1691136614806!5m2!1ses-419!2smx"
              loading="lazy"
              className="w-full h-52"
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
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; 2023 Tekamon117, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
