export function FormColaboradoresEncarregado() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-16 rounded-md shadow-md">
      <form>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="mocoto"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nome
            </label>
            <input
              type="text"
              id="total"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nome"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mocoto"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Numero do Registro
            </label>
            <input
              type="text"
              id="total"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mocoto"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              PIS/PASÉP
            </label>
            <input
              type="text"
              id="total"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="culatra"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Data Admissão
            </label>
            <input
              type="date"
              id="data"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-3 flex rounded-md shadow-sm">
            <span className="mt-2 h-10 w-[80px]  dark:text-black  inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              Especialização
            </span>
            <select
              className="form-select appearance-none
                        w-full
                        px-3
                        py-1.5
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        mt-2
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Selecionar</option>
              <option></option>
            </select>
          </div>
          <div className="mt-3 flex rounded-md shadow-sm">
            <span className="mt-2 h-10 w-[80px]  dark:text-black  inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              EPI`S
            </span>
            <select
              className="form-select appearance-none
                        w-full
                        px-3
                        py-1.5
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        mt-2
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Selecionar</option>
              <option></option>
            </select>
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
