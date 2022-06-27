import { TableFuncoes } from './TableFuncoes'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Notification } from '../../../utils/Notification'
import { api } from '../../../services/axios'
import { useEffect, useState } from 'react'
interface IFormValues {
  nome_funcao: string
}

interface Funcoes {
  id: number
  nome_funcao: string
}

export function FormFuncoes() {
  const { register, handleSubmit } = useForm<IFormValues>()
  const [funcoes, setFuncoes] = useState<Funcoes[]>()
  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      await api.post('funcoes', data)
      Notification.fire({
        icon: 'success',
        title: 'Cadastro realizado com sucesso!',
      })
    } catch (e: any) {
      Notification.fire({
        icon: 'error',
        title: e.message,
      })
    }
  }
  useEffect(() => {
    api.get('funcoes').then((res) => {
      const funcoes = res.data
      setFuncoes(funcoes)
    })
    window.location.reload(), 4000
  }, [])

  return (
    <>
      <div className="max-w-2xl mx-auto bg-gray-50  dark:bg-[#1f2937]  p-16 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div>
            <label
              htmlFor="mocoto"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nome
            </label>
            <input
              {...register('nome_funcao')}
              type="text"
              id="total"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cadastrar
          </button>
        </form>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Titulo Musica
            </th>
          </tr>
        </thead>
        <tbody>
          {funcoes?.map((funcao) => (
            <tr
              key={funcao.id}
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {funcao.id}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {funcao.nome_funcao}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
