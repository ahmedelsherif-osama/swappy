function ProductCard (props) {
    let product1BG = {
        "background-image":"url(images/img3.png)",
        "background-size":"cover",
        "background-repeat": "no-repeat", 
        "background-position": "center",
    }
    return(

        <div className="col-lg-3 col-md-3 col-12 product-card padding-y-1 px-3">
            <div className="col-lg-12 col-md-12 product-image" style={product1BG}></div>
            <div className="padding-y-1 text-left">
                <h5 className="product-name">{props.productName}</h5>
                <h5 className="product-pricing">AED {props.productPrice}</h5>
                <h6 className="product-location font-10"><i className="fa-solid fa-location-dot font-16 me-2"></i>{props.productLocation}</h6>
            </div>
            <button className="btn btn-primary mx-auto w-100">Enquire Now</button>
        </div>

    )   
}
export default ProductCard;