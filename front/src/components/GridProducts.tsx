const products = [
  {
    id: 1,
    name: 'Kit Panelada',
    imageSrc:
      'https://files.fm/thumb_show.php?i=z8bt8njmp',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Congelado',
  },
  {
    id: 2,
    name: 'Tripa Grossa',
    imageSrc:
      'https://files.fm/thumb_show.php?i=2pk626tyg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Congelado - Salgado',
  },
  {
    id: 3,
    name: 'Mocoto',
    imageSrc:
      'https://files.fm/thumb_show.php?i=fjr5qdyy6',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Congelado',
  },
  {
    id: 4,
    name: 'Bucho',
    imageSrc:
      'https://files.fm/thumb_show.php?i=frm5ubf7b',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Congelado - Salgado',
  },
]

export default function GridProducts() {
  return (
    <div >
      <div className="max-w-2xl mx-auto  px-0  lg:max-w-7xl ">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6  xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className=" relative bg-white p-4 rounded-md shadow-md"
            >
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                   
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
