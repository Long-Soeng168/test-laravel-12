import { MyImage } from "./components/my-image"
import { MyFeatureProducts} from "./components/my-feature-products"
import MyLayout from "./layout/layout"

const SolutionsPage = () => {
  return (
   <MyLayout>
        <MyImage/>
        <MyFeatureProducts/>
   </MyLayout>
  )
}

export default SolutionsPage

