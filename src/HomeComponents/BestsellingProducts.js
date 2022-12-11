function BestsellingProducts(){

    let product1BG = {
        "background-image":"url(images/img3.png)",
        "background-size":"cover",
        "background-repeat": "no-repeat", 
        "background-position": "center",
    }

    let product2BG = {
        "background-image":"url(images/comfortable-design.png)",
        "background-size":"cover",
        "background-repeat": "no-repeat", 
        "background-position": "center",
    }

    let product3BG = {
        "background-image":"url(images/biophilic-design.png)",
        "background-size":"cover",
        "background-repeat": "no-repeat", 
        "background-position": "center",
    }

    let product4BG = {
        "background-image":"url(images/sustainable-chair.png)",
        "background-size":"cover",
        "background-repeat": "no-repeat", 
        "background-position": "center",
    }

    let btnStyle = {
        "width":"100%",
    }

    return(
        <section className="col-lg-10 col-11 primary-section margin-y-5  mx-auto">

            <h2 className="heading">Trending In <strong>Beds</strong></h2>
            <div className="heading-border"></div>

            <div className="col-lg-12 col-12 col-md-10 row mx-auto">

                <div className="col-lg col-md product-card padding-y-1 px-3">
                    <div className="col-lg-12 col-md-12 product-image" style={product1BG}></div>
                    <div className="padding-y-1 text-left">
                        <h4 className="product-name">King Size Sofa</h4>
                        <h5 className="product-pricing">AED 2,000</h5>
                        <h6 className="product-location font-10"><i className="fa-solid fa-location-dot font-16"></i> Al Mamzar, Dubai</h6>
                    </div>
                    <button className="btn btn-primary mx-auto" style={btnStyle}>Enquire Now</button>
                </div>

                <div className="col-lg col-md product-card padding-y-1 px-3">
                    <div className="col-lg-12 col-md-12 product-image" style={product2BG}></div>
                    <div className="padding-y-1 text-left">
                        <h4 className="product-name">King Size Sofa</h4>
                        <h5 className="product-pricing">AED 2,000</h5>
                        <h6 className="product-location font-10"><i className="fa-solid fa-location-dot font-16"></i> Al Mamzar, Dubai</h6>
                    </div>
                    <button className="btn btn-primary" style={btnStyle}>Enquire Now</button>
                </div>

                <div className="col-lg col-md product-card padding-y-1 px-3">
                    <div className="col-lg-12 col-md-12 product-image" style={product3BG}></div>
                    <div className="padding-y-1 text-left">
                        <h4 className="product-name">King Size Sofa</h4>
                        <h5 className="product-pricing">AED 2,000</h5>
                        <h6 className="product-location font-10"><i className="fa-solid fa-location-dot font-16"></i> Al Mamzar, Dubai</h6>
                    </div>
                    <button className="btn btn-primary" style={btnStyle}>Enquire Now</button>
                </div>

                <div className="col-lg col-md product-card padding-y-1 px-3">
                    <div className="col-lg-12 col-md-12 product-image" style={product4BG}></div>
                    <div className="padding-y-1 text-left">
                        <h4 className="product-name">King Size Sofa</h4>
                        <h5 className="product-pricing">AED 2,000</h5>
                        <h6 className="product-location font-10"><i className="fa-solid fa-location-dot font-16"></i> Al Mamzar, Dubai</h6>
                    </div>
                    <button className="btn btn-primary" style={btnStyle}>Enquire Now</button>
                </div>

            </div>

        </section>
    )
}

export default BestsellingProducts