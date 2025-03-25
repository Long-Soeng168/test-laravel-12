import MyCategories from "./components/my-categories"
import { MyFeatureProducts} from "./components/my-feature-products"
import MyLayout from "./layout/layout"
import { MySlide } from "@/components/my-slide"

const SolutionsPage = () => {
  return (
   <MyLayout>
        <MySlide/>
        <MyCategories/>
        <MyFeatureProducts/>
   </MyLayout>
  )
}

export default SolutionsPage

