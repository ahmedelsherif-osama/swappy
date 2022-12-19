function Cart() {

    let productImg = {
        "background": "linear-gradient(90deg,rgba(0,0,0,0),rgba(126, 217, 87, 0)), url(/images/img3.png)",
        "background-repeat": "no-repeat", 
        "background-size":"cover",
        "background-position": "center",
        "border-radius": "12px",
        "height":"100px",
    }

    return(
        <section className="margin-y-3 container-fluid mx-auto row">

            <div className="col-lg-9">
                <h1 className="text-center margin-bottom-2">My Cart</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-lg-1 text-center"></th>
                            <th className="col-lg-8 text-center">Item</th>
                            <th className="col-lg text-center">Price</th>
                            <th className="col-lg text-center">Quantity</th>
                            <th className="col-lg text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center"><i class="fa-solid fa-xmark font-20"></i></td>
                            <td><h6 className="bold">King Throne</h6></td>
                            <td><p className="text-center">150.00</p></td>
                            <td><p className="text-center">1</p></td>
                            <td><p className="text-center">150.00</p></td>
                        </tr>
                        <tr>
                            <td className="text-center"><i class="fa-solid fa-xmark font-20"></i></td>
                            <td><h6 className="bold">New Chair</h6></td>
                            <td><p className="text-center">150.00</p></td>
                            <td><p className="text-center">1</p></td>
                            <td><p className="text-center">150.00</p></td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className="col-lg-3">
                <h5 className="bold">Summary</h5><hr />
                <div className="row">
                    <p className="col-lg-6">Subtotal</p>
                    <p className="col-lg-6 text-end">AED 150.00</p>
                </div>
                <div className="row">
                    <p className="col-lg-6">Shipping</p>
                    <p className="col-lg-6 text-end">AED 0.00</p>
                </div>
                <div className="row">
                    <p className="col-lg-6">Tax</p>
                    <p className="col-lg-6 text-end">AED 7.50</p>
                </div>
                <hr />
                <div className="row">
                    <p className="col-lg-6 bold">Total</p>
                    <p className="col-lg-6 text-end bold">AED 157.50</p>
                </div>
                <div className="col-lg-12">
                    <button className="btn btn-primary bold w-100" >Proceed To Checkout</button>
                </div>
            </div>

        </section>
    )
}

export default Cart