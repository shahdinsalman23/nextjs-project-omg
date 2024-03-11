import Link from "next/link";

export default function About(){
    return (
       <>
       <section className="inner-pg-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-pg-txt">
                        <h3>Our Story</h3>
                        <div className="inner-pg-link">
                            <Link href={`./`}>Home</Link>
                            <span>/</span>
                            <Link href={`about`}>About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="who-we-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="who-are-img">
                        <img src="images/who-are-img-1.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="who-we-txt">
                        <h3>Who Wo Are</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae odio tempore est deleniti eos modi magnam vitae! Similique, iste voluptatibus qui recusandae vero ex labore alias omnis, optio modi dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate odio nesciunt explicabo nam excepturi, laborum itaque hic est earum rerum asperiores id vero, accusantium ab natus veritatis rem quisquam eaque?</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="who-we-txt">
                        <h3>Our Mission</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae odio tempore est deleniti eos modi magnam vitae! Similique, iste voluptatibus qui recusandae vero ex labore alias omnis, optio modi dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate odio nesciunt explicabo nam excepturi, laborum itaque hic est earum rerum asperiores id vero, accusantium ab natus veritatis rem quisquam eaque?</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mission-img">
                        <img src="images/mission-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="brand-image-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="brand-img">
                        <img src="images/brand-img.png" alt="" />
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