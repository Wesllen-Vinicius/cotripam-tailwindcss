
import { CardGerentes } from '../components/CardsGerentes'
import {  CarouselComponent } from '../components/Carousel'
import { Contacts } from '../components/Contacts'
import GridProducts from '../components/GridProducts'

export default function Home() {
  return (
    <>
      <div className="h-auto">
        <CarouselComponent />
        <GridProducts />
        <CardGerentes />
        <Contacts />
      </div>
    </>
  )
}
