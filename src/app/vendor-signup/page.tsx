
export default function vendorSignup() {

    return (
        <>
            <section className="inner-pg-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-pg-txt">
                                <h3>Vendors Signup</h3>
                                <div className="inner-pg-link">
                                    <a href="index.php">Home</a>
                                    <span>/</span>
                                    <a href="vendor-signup.php">Vendor Signup</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="vendor-signup">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="vendor-signup-img">
                                <img src="images/vendorpg-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="vendor-signup-form">
                                <div className="col-lg-12 p-0">
                                    <section className="sec-padding-small">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12 p-0">
                                                    <ul className="tabs-custom-nav">
                                                        <li><a href="#tab1" className="current">login</a></li>
                                                        <li><a href="#tab2">Sign Up</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="tabs-custom general">
                                                        <div id="tab1" className="selected tab-content-panel">
                                                            <div className="row ">
                                                                <div className="col-lg-12">
                                                                    <div className="vendor-signup-txt">
                                                                        <h3>Vendor Login</h3>
                                                                        <div className="vendor-field">
                                                                            <input type="email" name="" id=""
                                                                                placeholder="Email Address" />
                                                                        </div>
                                                                        <div className="vendor-field">
                                                                            <input type="password" name="" id=""
                                                                                placeholder="Password" />
                                                                        </div>
                                                                        <div className="vendor-signups">
                                                                            <a href="#">Login</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tab2" className="tab-content-panel">
                                                            <div className="row ">
                                                                <div className="col-lg-12">
                                                                    <div className="vendor-signup-txt">
                                                                        <h3>Vendor Signup</h3>
                                                                        <div className="vendor-field">
                                                                            <input type="email" name="" id=""
                                                                                placeholder="Email Address" />
                                                                        </div>
                                                                        <div className="vendor-field">
                                                                            <input type="password" name="" id=""
                                                                                placeholder="Create Password" />
                                                                        </div>
                                                                        <div className="vendor-field">
                                                                            <input type="password" name="" id=""
                                                                                placeholder="Confirm Password" />
                                                                        </div>
                                                                        <div className="vendor-signups">
                                                                            <a href="#">Signup</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="already-acc">
                                                                        <p>Already have an account? <a
                                                                                href="login.php">Login</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





    <section className="newsletter-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="newsletter">
                        <img src="images/email-logo.png" alt="" />
                        <div className="newsletter-txt">
                            <h4>Newsletter And get update</h4>
                            <p>Sign up for our newsletter get up-to-date from us</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="newsletter-field">
                        <input type="email" name="" id="" placeholder="Enter your email address..." />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>



        </>
    )
}