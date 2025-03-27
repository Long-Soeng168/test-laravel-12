import MyAllFeatureProducts from "./components/my-all-feature-products"
import MyCategories from "./components/my-categories"
import MyLayout from "./layout/layout"

const SolutionsPage = () => {
  return (
   <MyLayout>
    <div className="bg-white w-full h-[100vh] px-4 sm:px-10 pt-10 flex gap-4">
        <div className="max-w-2xl"><MyCategories/></div>
        <div>
            <MyAllFeatureProducts/>
        </div>
    </div>
   </MyLayout>
  )
}

export default SolutionsPage

