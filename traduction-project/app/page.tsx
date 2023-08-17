import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import assist1 from '@/assets/asistente.webp';
import assist2 from '@/assets/asistente1.webp';
import assist3 from '@/assets/asistente2.webp';
import assist4 from '@/assets/asistente3.webp';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:pt-24 lg:px-8">
      <div className="relative isolate pt-14">
          
          <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                A better way to ship your projects
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip
                nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit.
              </p>
              
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              {/* <Image/> */}
              <Image src={assist1} alt='Asistente 1' className='w-52 border rounded-lg mx-auto'/>
            </div>
          </div>
        </div>
    </main>
  )
}
