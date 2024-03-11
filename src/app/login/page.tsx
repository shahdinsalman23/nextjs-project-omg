import Link from "next/link";

export default function login() {
    return (
        <>
            <section className="inner-pg-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-pg-txt">
                                <h3>Login</h3>
                                <div className="inner-pg-link">
                                    <Link href={`./`}>Home</Link>
                                    <span>/</span>
                                    <Link href={`login`}>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="create-event-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="create-event">
                        <div className="create-account-txt">
                            <h3>Login</h3>
                        </div>
                        <div className="account-field">
                            <input type="email" name="" id="" placeholder="Email Address" />
                            <input type="email" name="" id="" placeholder="Password" />
                            <button type="submit">Continue</button>
                        </div>
                        <div className="create-or">
                            <h5>or</h5>
                        </div>
                        <Link href="#" className="google-txt">
                            <p>Email me a Login link</p>
                        </Link>
                        <Link href="#" className="google-txt">
                            <img src="images/google-icon-1.png" alt="" />
                            <p>Sign in with Google</p>
                        </Link>
                        <div className="other-login">
                            <h6>Other Login Methods</h6>
                            <div className="other-logo">
                                <Link href="#"><img src="images/fb-logo.png" alt="" /></Link>
                                <Link href="#"><img src="images/apple-logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="create-login-btn">
                            <Link href={`signup`}>Sign Up</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="event-banner-img">
                        <img src="images/event-img.png" alt="" />
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