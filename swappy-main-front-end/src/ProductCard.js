function ProductCard (props) {

    let imgStyle={
        "height":"100%",
        "object-fit":"cover",
        "width":"100%"
    }

    return(

        <div className="col-lg-3 col-md-3 col-12 product-card padding-y-1 px-3">
            <div className="col-lg-12 col-md-12 product-image">
                <img src={props.img} className="h-100" style={imgStyle} alt="Product"/>
            </div>
            <div className="padding-y-1 text-left">
                <h5 className="product-name">{props.name}</h5>
                <h5 className="product-pricing">AED {props.price}</h5>
                <h6 className="product-location font-10"><i className="fa-solid fa-location-dot font-16 me-2"></i>{props.location}</h6>
            </div>
            <button className="w-100 btn btn-primary"><i class="fa-solid fa-cart-plus me-2"></i>Add to cart</button>
        </div>

    )   
}
export default ProductCard;