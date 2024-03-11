import Link from "next/link";

export default function createEvent(){
    return(

        <>
        <section className="inner-pg-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-pg-txt">
                        <h3>Create Event</h3>
                        <div className="inner-pg-link">
                            <Link href={`./`}>Home</Link>
                            <span>/</span>
                            <Link href={`create-event`}>Create Event</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="create-events-sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="create-event-form">
                    <form action="">
                        <div className="basic-info-txt">
                            <h3>Basic Info</h3>
                            <h6>Name your event and tell event-goers why they should come. Add details that
                                highlight what <br /> makes it unique.</h6>
                            <textarea name="" id="" placeholder="Event title* Be Clear and descriptive"></textarea>
                            <span>0/75</span>
                            <textarea name="" id="" placeholder="Oranizer* Be Clear and descriptive"></textarea>
                            <p>This profile describes a unique organizer and shows all of the events on one page.<a
                                    href="#">View Organizer Info</a></p>
                            <div className="select-options">
                                <div className="type-select-option">
                                    <select name="" id="">
                                        <option value="">Type</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="type-select-option">
                                    <select name="" id="">
                                        <option value="">Category</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="tag-form-txt">
                            <form action="">
                                <h3>Tags</h3>
                                <h6>Improve discoverability of your event by adding tags relevant to the subject
                                    matter.</h6>
                                <textarea name="" id="" placeholder="Press Enter to add ab tag"></textarea>
                                <span>0/25</span>
                                <select name="" id="">
                                    <option value="">Select Vendor</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                        </div>
                        <div className="location-form-txt">
                            <h3>Location</h3>
                            <h6>Help people in the area discover your event and let attendees know where to show up.
                            </h6>
                            <div className="location-btn">
                                <a href="#">Venue</a>
                                <a href="#">Online Event</a>
                                <a href="#">To be announced</a>
                            </div>
                            <div className="venue-location">
                                <h6>Venue Location</h6>
                                <div className="location search">
                                    <input type="search" name="" id="" placeholder="Search for a venue or address" />
                                    <span><i className="ri-search-line"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="date-time-txt">
                            <h3>Date and time</h3>
                            <p>Tell event-goers when your event starts and ends so they can make plans to attend.
                            </p>
                            <div className="location-btn">
                                <a href="#">Single Event</a>
                                <a href="#">Resuming Event</a>
                            </div>
                            <div className="calender-date">
                                <h6>Single event happens once and can last multiple days</h6>
                                <div className="calender-time">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="basic-calender">
                                                        <input type="date" name="" id="" placeholder="Events Starts*" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="basic-calender">
                                                        <input type="time" name="" id="" placeholder="Start Time*" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="basic-calender">
                                                        <input type="date" name="" id="" placeholder="Events End*" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="basic-calender">
                                                        <input type="time" name="" id="" placeholder="End Time*" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="display-start-time-txt">
                            <div className="display-time">
                                <input type="checkbox" name="" id="" />
                                <div className="display-time-txt">
                                    <h5>Display Start Time</h5>
                                    <p>The start time of your event will be displayed to attendees.</p>
                                </div>
                            </div>
                            <div className="display-time">
                                <input type="checkbox" name="" id="" />
                                <div className="display-time-txt">
                                    <h5>Display End Time</h5>
                                    <p>The start time of your event will be displayed to attendees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="time-zone-txt">
                            <select name="" id="">
                                <option value="">(GMT-0800) United States (Sitka) Time</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="time-zone-txt">
                            <select name="" id="">
                                <option value="">English (US)</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                    </form>
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