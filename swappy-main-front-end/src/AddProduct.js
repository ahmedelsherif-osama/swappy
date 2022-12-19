function AddProduct(){
    return(
        <section className="margin-y-4">

            <h1 className="text-center">Add New Product</h1>

            <form className="col-lg-6 mx-auto">

                <div className="col-lg-12 row margin-y-3">
                    <div className="col-lg-2">
                        <label className="bold">Name</label>
                    </div>
                    <div className="col-lg">
                        <input className=" input-underline" type="text" name="newProductName" />
                    </div>
                </div>

                <div className="col-lg-12 row margin-y-3">
                    <div className="col-lg-2">
                        <label className="bold">Type</label>
                    </div>
                    <div className="col-lg">
                        <input className="input-underline" type="text" name="newProductType" />
                    </div>
                </div>

                <div className="col-lg-12 row margin-y-3">
                    <div className="col-lg-2">
                        <label className="bold">Room</label>
                    </div>
                    <div className="col-lg">
                        <input className="input-underline" type="text" name="newProductRoom" />
                    </div>
                </div>

                <div className="col-lg-12 row margin-y-3">
                    <div className="col-lg-2">
                        <label className="bold">Price</label>
                    </div>
                    <div className="col-lg">
                        <input className="input-underline" type="number" name="newProductPrice" />
                    </div>
                </div>

                <div className="col-lg-12 row margin-y-3">
                    <div className="col-lg-2">
                        <label className="bold">Description</label>
                    </div>
                    <div className="col-lg">
                        <input className="input-underline" type="text" name="newProductDescription" />
                    </div>
                </div>

                <div className="col-lg-12 row margin-y-3">
                    <div className="col-lg-2">
                        <label className="bold">Picture</label>
                    </div>
                    <div className="col-lg">
                        <input className="" type="file" name="newProductPicture" />
                    </div>
                </div>

                <div className="col-lg-4 mx-auto">
                    <button className="btn btn-primary w-100">Add Product</button>
                </div>

            </form>

        </section>       
    )
}

export default AddProduct