import ProductCard from "./ProductCard"

function BestsellingProducts(){

    return(
        <section className="col-lg-10 col-11 primary-section margin-y-5  mx-auto">

            <h2 className="heading">Trending In <strong>Beds</strong></h2>
            <div className="heading-border"></div>

            <div className="col-lg-12 col-12 col-md-10 row mx-auto">
                <ProductCard productName="Sofa Bed" productPrice="2,000" productLocation="Al Mamzar, Dubai" />
                <ProductCard productName="Sofa Bed" productPrice="2,000" productLocation="Al Mamzar, Dubai" />
                <ProductCard productName="Sofa Bed" productPrice="2,000" productLocation="Al Mamzar, Dubai" />
                <ProductCard productName="Sofa Bed" productPrice="2,000" productLocation="Al Mamzar, Dubai" />
            </div>

        </section>
    )
}

export default BestsellingProducts