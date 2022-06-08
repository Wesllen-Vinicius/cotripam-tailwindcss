import { Tab } from '@headlessui/react'
import { FormAbates } from '../pages/modules/Encarregado/formAbates'
import { FormProdutos } from '../pages/modules/Encarregado/formProdutos'
import { FormSerosa } from '../pages/modules/Encarregado/formSerosa'
import { FormTripaCozida } from '../pages/modules/Encarregado/formTripaCozida'
import { FormTripaExportacao } from '../pages/modules/Encarregado/formTripaExportacao'
import { PerfilEncarregado } from '../pages/modules/Encarregado/perfilEncarregado'
import { AnimatedDiv } from './animations/animatedDiv'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const NavigationEnc = () => {
  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Abate Diario
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Serosa
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Tripa Cozida
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
           Inssumos
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Tripa para Exportação
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Perfil
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-transparent p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <AnimatedDiv key={1}>
              <FormAbates />
            </AnimatedDiv>
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              'rounded-xl bg-transparent p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <AnimatedDiv key={2}>
              <FormSerosa />
            </AnimatedDiv>
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              'rounded-xl bg-transparent  p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <AnimatedDiv key={3}>
              <FormTripaCozida />
            </AnimatedDiv>
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              'rounded-xl bg-transparent  p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <AnimatedDiv key={4}>
              <FormProdutos />
            </AnimatedDiv>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-transparent  p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <AnimatedDiv key={4}>
              <FormTripaExportacao />
            </AnimatedDiv>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-transparent  p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <AnimatedDiv key={4}>
              <PerfilEncarregado />
            </AnimatedDiv>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
