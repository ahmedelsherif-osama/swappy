import ProductCard from "./ProductCard"
import products from "./products"

function createProductCard(products){
    return(
        <ProductCard name={products.name} price={products.price} location={products.location} img={products.img} />
    )
}

function ProductListing(){

    return(
        <section>
            
            <div className="bg-dark text-light text-center padding-y-4">
                <h1>Product Listing</h1>
            </div>

            <div className="col-lg-10 col-10 col-md-10 row mx-auto margin-y-1">
                {products.map(createProductCard)}
            </div>
            
        </section>
    )
}

export default ProductListing