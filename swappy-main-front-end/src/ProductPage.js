import ProductCard from "./HomeComponents/ProductCard"

function ProductPage(){

    let boxShadow = {
        "box-shadow": "0px 0px 17px 12px lightgray",
        "border-radius":"8px"
    }

    let productImage ={
        "height":"450px",
        "background-image":"url(./images/img3.png)",
        "background-position":"center",
        "background-size":"cover",
        "background-repeat":"no-repeat"
    }

    let productDetails = {
        name:"Brand New Sofa",
        price:2000,
        type:"Sofa",
        room:"Bedroom, Living Room",
        location:"Al Mamzar, Dubai",
        condition:"Perfect",
        usage:"6 months"
    }

    return(
        <section class="margin-y-2">

            <div class="col-lg-10 mx-auto row margin-bottom-2">

                <div class="col-lg-8" style={productImage}>
                </div>

                <div className="col-lg-4 padding-x-2 my-auto">
                        <h4 className="bold margin-bottom-1">{productDetails.name}</h4>
                        <h5 className="primary-text bold margin-bottom-1">AED {productDetails.price}</h5>
                        <table class="table margin-bottom-1">
                            <thead>
                                <th className="col-lg-3"></th>
                                <th className="col-lg-9"></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bold">Type:</td>
                                    <td>{productDetails.type}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Room:</td>
                                    <td>{productDetails.room}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Location:</td>
                                    <td>{productDetails.location}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Condition:</td>
                                    <td>{productDetails.condition}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Usage:</td>
                                    <td>{productDetails.usage}</td>
                                </tr>
                            </tbody>
                        </table>

                        <button className="w-100 btn btn-primary"><i class="fa-solid fa-cart-plus me-3"></i>Add to cart</button>

                </div>

            </div>

            <div class="col-lg-10 row mx-auto margin-top-4">

                <h3 className="text-center">Related Items</h3>

                <ProductCard productName={productDetails.name} productPrice={productDetails.price} productLocation={productDetails.location} />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>

        </section>
    )
}

export default ProductPage;