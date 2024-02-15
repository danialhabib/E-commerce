import { ProductContext } from "../Context/ProductContext"
import Project from "./Project"
import "./FeatureProduct.css"

const FeatureProduct = () => {
    const { isLoading, FeaturedProduct } = ProductContext();

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    return (
        <>

            <div className="container-fluid  boxShadow">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3  mt-2 p-3 " >
                        <h4 >CHECK NOW!</h4>
                        <h1 className="fw-bold text-nowrap">OUR FEATURE SERVICE</h1>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-white">
                 <div className="row d-flex justify-content-around">
                 {
                FeaturedProduct.map((curr) => { return <Project key={curr.id} {...curr} /> })
                 }
                 </div>
            </div>

        </>
    )
}

export default FeatureProduct
