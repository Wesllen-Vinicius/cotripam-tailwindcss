import Carousel from "../components/Carousel";
import GridProducts from "./modules/Gerencia/Products/GridProducts";

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <GridProducts/>
      </div>
    </>
  )
}
