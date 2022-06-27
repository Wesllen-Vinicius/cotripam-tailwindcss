export function PerfilSede() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-16 rounded-md shadow-md">
      <form>
        <div>
          <div className="mt-1 flex items-center justify-center">
            <span className="inline-block h-24 w-24 rounded-full overflow-hidden bg-gray-100 ">
              <svg
                className="h-full w-full text-gray-300 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="grid gap-6 mb-6 lg:grid-cols-2 mt-8">
          <div>
            <label
              htmlFor="nome"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Função
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="comarca"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Comarca
            </label>
            <input
              type="text"
              id="comarca"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="contato"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Contato
            </label>
            <input
              type="tel"
              id="contato"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            disabled
          />
        </div>
      </form>
    </div>
  )
}
