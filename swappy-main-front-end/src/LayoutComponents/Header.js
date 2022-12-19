import UserAvatar from "../UserScreenComponents/UserAvatar";

function Header(){

    let row2Styling = {
        "border-top":"1px solid lightgray",
        "border-bottom":"1px solid lightgray"
    }

    return(
        <div>

            <section className="navigation">

                {/* Row 1 */}
                <div className="row col-lg-10 col-md-10 mx-auto padding-y-1 justify-content-between">

                    {/* Logo */}
                    <div className="col-lg-2 col-md-2 my-auto">
                        <a href="/">
                            <img src="/images/logo.png" className="navigation-logo my-auto" alt="logo"/>
                        </a>
                    </div>

                    {/* Search */}
                    <div className="col-lg-8 col-md-7 row">
                        <div className="col-lg-10 col-md-10 m-auto row">
                            <form className="row col-lg-12 col-md-12">
                                <input className="navigation-search my-auto col-lg-11 col-md-11" type="search" placeholder="I am looking for..." />
                                <button type="submit" className="btn btn-primary col-lg-1 col-md-1 navigation-search-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div>

                    {/* CTA and Login */}
                    <div className="col-lg-2 col-md-3 row">
                        <div className="col-lg my-auto text-end">
                            <a href="/cart">
                                <i class="fa-solid fa-cart-shopping font-25"></i>
                            </a>
                        </div>
                        <div className="col-lg my-auto text-end">
                            {/* <a title="" href="/registration" className="text-end">
                                <UserAvatar />
                            </a> */}
                            <a href="/account">
                                <i class="fa-solid fa-user font-25 "></i>
                            </a>
                        </div>
                    </div>

                </div>


                {/* Row 2 */}
                <div className="col-lg-10 col-md-10 mx-auto py-2 row justify-content-between" style={row2Styling}>
                    <div className="col-lg col-md">
                        <a href="/product-listing" className="nav-link">Living Room</a>
                    </div>
                    <div className="col-lg col-md">
                        <a href="/" className="nav-link">Bedroom</a>
                    </div>
                    <div className="col-lg col-md">
                        <a href="/" className="nav-link">Dining Room</a>
                    </div>
                    <div className="col-lg col-md"> 
                        <a href="/" className="nav-link">Office</a>
                    </div>
                    <div className="col-lg col-md"> 
                        <a href="/" className="nav-link">Outdoor</a>
                    </div>
                    <div className="col-lg col-md"> 
                        <a href="/" className="nav-link">Bathroom</a>
                    </div>
                </div>

            </section>

            {/* Mobile Navigation */}

            <section class="col-12 mobile-navigation padding-y-1 m-auto">

                <div class="row col-11 m-auto">

                    <div class="col my-auto">
                        <i class="fa-solid fa-bars mobile-menu-icon" data-bs-toggle="offcanvas" data-bs-target="#demo"></i>
                        <div class="offcanvas offcanvas-start" id="demo">
                            <div class="offcanvas-header text-end">
                            </div>
                            <div class="offcanvas-body">
                                <a href="/" class="nav-link mobile-nav-link font-25">Living Room</a>
                                <a href="/" class="nav-link mobile-nav-link font-25">Bedroom</a>
                                <a href="/" class="nav-link mobile-nav-link font-25">Kitchen</a>
                                <a href="/" class="nav-link mobile-nav-link font-25">Dining Room</a>
                                <a href="/" class="nav-link mobile-nav-link font-25">Outdoor</a>
                                <a href="/" class="nav-link mobile-nav-link font-25">Bathroom</a>
                            </div>
                        </div>
                    </div>

                    <div class="mobile-navigation-image col-5">
                        <img src="./images/logo.png" class="navigation-logo" alt=""/>
                    </div>

                    <div class="col">

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Header;