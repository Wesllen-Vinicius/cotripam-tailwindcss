import { Tab } from "@headlessui/react";
import { FormSerosa } from "../pages/modules/Encarregado/formSerosa";
import { FormColaboradores } from "../pages/modules/Gerencia/formColaboradores";
import { AnimatedDiv } from "./animations/animatedDiv";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const NavigationGerencia = () => {
  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 p-1">
          <Tab
            className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-blue-700  shadow'
                : 'text-blue-700 hover:bg-white/[0.12] hover:text-white'
            )
            }
          >
            Cadastro de Colaboradores
          </Tab>
         
          <Tab
            className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-blue-700 shadow'
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
              "rounded-xl bg-transparent p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <AnimatedDiv key={1}>
              <FormColaboradores/>
            </AnimatedDiv>
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              "rounded-xl bg-transparent p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <AnimatedDiv key={2}>
              <FormSerosa/>
            </AnimatedDiv>
          </Tab.Panel> 

        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};