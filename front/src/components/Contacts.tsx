export function Contacts() {
  return (
    <div className="bg-white overflow-hidden sm:rounded-lg shadow-md mt-5">
      <div className="px-4  sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Contatos
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Contacts</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
            <dt className="text-sm font-medium text-gray-500">Telefone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              +55 (68) 0000-0000
            </dd>
          </div>
          <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Celular</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              +55 (68) 99946-0691
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              cotripamindcom@gmail.com
            </dd>
          </div>
          <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Horarios de Funcionamento
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Segunda a Sabado - 08:00AM 18:00PM
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
