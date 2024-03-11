import Link from "next/link";



export default function Home() {
  return (
    <>
    <section className="first-banner-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="first-banner-txt">
                        <h6>We C<span>onne</span>ct</h6>
                        <h4>Vendor <span>&</span> Event</h4>
                        <h2>Organizers</h2>
                    </div>
                    <div className="first-banner-search">
                        <div className="search-function">
                            <span><i className="ri-search-line"></i></span>
                            <input type="search" name="" id="" placeholder="Search Function" />
                        </div>
                        <div className="search-location">
                            <span><i className="ri-search-line"></i></span>
                            <input type="search" name="" id="" placeholder="Search Location" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section className="for-paid-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="paid-txt">
                        <h4>for paid advertisements</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima alias culpa, odit
                            nostrum omnis? Aliquid, animi nam, soluta nisi illo</p>
                        <div className="for-paid-btn">
                            <Link href="#" className="theme-btn">Upload ads</Link>
                            <Link href="#" className="theme-btn">Join Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section className="looking-vendors-sec">
        <div className="vendor-head">
            <h3>Looking for vendors</h3>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="event-img">
                        <img src="images/event-img-1.png" alt="eventImgOne" />
                        <div className="event-name">
                            <h5>food</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-img">
                        <img src="images/event-img-2.png" alt="" />
                        <div className="event-name">
                            <h5>Handcraft</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-img">
                        <img src="images/event-img-3.png" alt="" />
                        <div className="event-name">
                            <h5>Items</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-img">
                        <img src="images/event-img-4.png" alt="" />
                        <div className="event-name">
                            <h5>Other</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-img">
                        <img src="images/event-img-1.png" alt="" />
                        <div className="event-name">
                            <h5>food</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-img"> 
                        <img src="images/event-img-2.png" alt="" />
                        <div className="event-name">
                            <h5>Handcraft</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-img">
                        <img src="images/event-img-3.png" alt="" />
                        <div className="event-name">
                            <h5>Items</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-img">
                        <img src="images/event-img-4.png" alt="" />
                        <div className="event-name">
                            <h5>Other</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    

     <section className="looking-event-sec">
     <div className="vendor-head">
            <h3>Looking for Events</h3>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="event-near-btn">
                        <Link href="#">Events Near By</Link>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-1.png" alt="event-card-img-1" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-2.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-3.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-1.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="view-more-btn">
                        <Link href="looking-for-event.php" className="themelight">View more</Link>
                    </div>
                </div>
            </div>
        </div>
     </section>




     <section className="popular-event-sec">
     <div className="vendor-head">
            <h3>Popular Events</h3>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-1.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-2.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-3.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="view-more-btn">
                        <Link href="#" className="themelight">View more</Link>
                    </div>
                </div>
            </div>
        </div>
     </section>



  
      <section className="popular-event-sec">
     <div className="vendor-head">
            <h3>More Events</h3>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-1.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-2.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="event-card">
                        <img src="images/event-card-img-3.png" alt="" />
                        <Link href="#" className="apply-btn">Apply as a vendor</Link>
                        <Link href="#" className="buy-btn">Buy Tickets</Link>
                        <div className="event-txt-box">
                            <h4>Your heading here</h4>
                            <h5>Sat, Sep 2, 1:00 pm</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore ex corporis, distinctio, inventore ad veniam beatae saepe </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="view-more-btn">
                        <Link href="#" className="themelight">View more</Link>
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
  );
}


