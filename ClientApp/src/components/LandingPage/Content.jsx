import React, { } from "react";

const Content = () => {
    return (
        <React.Fragment>
            <section className="service-2 section">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="title text-center">
                                <h2>What Do We Offer</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,
                                consectetur
							adipisicing elit. Voluptates, earum. </p>
                                <div className="border"></div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <img src="images/about/member.jpg" className="inline-block" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="row text-center">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="service-item">
                                        <i className="tf-ion-ios-alarm-outline"></i>
                                        <h4>Time Management</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
									venenatis.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="service-item">
                                        <i className="tf-ion-ios-briefcase-outline"></i>
                                        <h4>Marketing Ideas</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
									venenatis.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="service-item">
                                        <i className="tf-ion-ios-email-outline"></i>
                                        <h4>Mail Support</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
									venenatis.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="service-item">
                                        <i className="tf-ion-ios-locked-outline"></i>
                                        <h4>Secure System</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
									venenatis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-2 section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center">
                                <h2>We Are Bingo Agency</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit accusamus
                                labore iusto,
							aut, eum itaque illo totam tempora eius.</p>
                                <div className="border"></div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src="images/about/about-2.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6">
                            <ul className="checklist">
                                <li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis
							vestibulum.</li>
                                <li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                                <li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis
							vestibulum.</li>
                                <li>Etiam porta sem multipage evint landing magna mollis euismod a pharetra augue.</li>
                                <li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                            </ul>
                            <a href="#" className="btn btn-main mt-20">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}

export default Content