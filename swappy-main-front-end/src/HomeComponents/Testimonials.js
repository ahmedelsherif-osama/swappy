function Testimonials(){

    let sectionStyle = {
        "background-color":"#00ADB5",
        "padding":"7.5% 0",
        "color":"#EEEEEE"
    }

    let testimonialsImg = {
        "background": "linear-gradient(90deg,rgba(0,0,0,0),rgba(126, 217, 87, 0)), url(/images/testimonial-img.png)",
        "background-repeat": "no-repeat",
        "background-position": "right", 
        "background-size":"cover",
        "border-radius": "0",
        "height":"450px",
        "margin":"2%"
    }

    let testimonialsContent ={
        "margin-top":"3%",
        "margin-bottom":"-3%"
    }

    return(
        <section style={sectionStyle}>

            <div className="col-lg-9 mx-auto row">

                <div className="col-lg-6 bg-light">
                    <div className="container-fluid mx-auto" style={testimonialsImg}>
                    </div>
                </div>

                <div className="col-lg-6 bg-light padding-y-3" style={testimonialsContent}>

                    <div className="text-center">
                        <h3 className="text-dark">Happy Customers!</h3>
                    </div>

                    <div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Testimonials