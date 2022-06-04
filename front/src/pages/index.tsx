import { Carousel } from '../components/Carousel'
import { FormContact } from '../components/FormContact'
import GridProducts from './modules/Gerencia/Products/GridProducts'

export default function Home() {
  return (
    <>
      <div className="h-auto">
        <Carousel />
        <GridProducts />
        <FormContact/>
      </div>
    </>
  )
}
