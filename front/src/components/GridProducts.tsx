import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Kit Panelada',
    imageSrc: 'https://files.fm/thumb_show.php?i=z8bt8njmp',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Congelado',
  },
  {
    id: 2,
    name: 'Tripa Grossa',
    imageSrc: 'https://files.fm/thumb_show.php?i=2pk626tyg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Congelado - Salgado',
  },
  {
    id: 3,
    name: 'Mocoto',
    imageSrc: 'https://files.fm/thumb_show.php?i=fjr5qdyy6',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Congelado',
  },
  {
    id: 4,
    name: 'Bucho',
    imageSrc: 'https://files.fm/thumb_show.php?i=frm5ubf7b',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Congelado - Salgado',
  },
]

export default function GridProducts() {

  return (
    <div>
      <div className="max-w-2xl mx-auto  px-0  lg:max-w-7xl ">
        <div className="mt-2 grid grid-cols-1 gap-y-10 gap-x-6  xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <>
              <div className="max-w-md bg-white rounded-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-t-sm"
                  src={product.imageSrc}
                  alt={product.imageAlt}
                />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </div>
              </div>
            </>
          ))}
          
        </div>
      </div>
    </div>
  )
}
