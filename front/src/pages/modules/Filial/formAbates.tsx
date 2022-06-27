export function FormAbates() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-16 rounded-md shadow-md">
      <form>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="total"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Total do Abate
            </label>
            <input
              type="number"
              id="total"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00.00"
              required
            />
          </div>
          <div>
            <label
              htmlFor="condenados"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Condenados
            </label>
            <input
              type="number"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00.00"
              required
            />
          </div>
          <div>
            <label
              htmlFor="bois"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Bois Abatidos
            </label>
            <input
              type="number"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00.00"
              required
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Vacas Abatidas
            </label>
            <input
              type="number"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00.00"
              required
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Motivo
            </label>
            <input
              className="
               form-control
               block
               w-full
               px-3
               py-1.5
               text-base
               font-normal
               text-gray-700
               bg-white bg-clip-padding
               border border-solid border-gray-300
               rounded
               transition
               ease-in-out
               m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
             "
              id="exampleFormControlTextarea1"
              placeholder="Your message"
            />
          </div>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Afirmo que todos os dados,{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              São Veridicos
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
