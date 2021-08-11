import React from "react";
export default function Services(props) {
  return (
    <>
      <section className="single-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Hizmetlerimiz</h2>
              <ol className="breadcrumb header-bradcrumb">
                {/* <li><a href="index.html">Home</a></li>
                            <li className="active">Our Services</li> */}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-12">
              <div className="title text-center">
                <h2>Our Services</h2>
                <p>
                  Vestibulum nisl tortor, consectetur quis imperdiet bibendum,
                  laoreet sed arcu. Sed condimentum iaculis ex, in faucibus
                  lorem accumsan non. Donec mattis tincidunt metus. Morbi sed
                  tortor a risus luctus dignissim.
                </p>
                <div className="border"></div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="service-block p-4 color-bg text-center">
                <div className="service-icon text-center">
                  <i className="tf-ion-ios-copy-outline"></i>
                </div>
                <h3>WordPress Theme</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget
                  orci dictum facilisis vel id tellus. Nullam iaculis arcu at
                  mauris dapibus consectetur.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="service-block p-4 text-center">
                <div className="service-icon text-center">
                  <i className="tf-ion-ios-alarm-outline"></i>
                </div>
                <h3>Responsive Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget
                  orci dictum facilisis vel id tellus. Nullam iaculis arcu at
                  mauris dapibus consectetur.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="service-block p-4 color-bg text-center">
                <div className="service-icon text-center">
                  <i className="tf-ion-ios-book-outline"></i>
                </div>
                <h3>Media &amp; Advertisement</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget
                  orci dictum facilisis vel id tellus. Nullam iaculis arcu at
                  mauris dapibus consectetur.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="service-block p-4  text-center">
                <div className="service-icon text-center">
                  <i className="tf-ion-ios-briefcase-outline"></i>
                </div>
                <h3>Graphic Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget
                  orci dictum facilisis vel id tellus. Nullam iaculis arcu at
                  mauris dapibus consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="service-block p-4 color-bg text-center">
                <div className="service-icon text-center">
                  <i className="tf-ion-ios-crop"></i>
                </div>
                <h3>Apps Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget
                  orci dictum facilisis vel id tellus. Nullam iaculis arcu at
                  mauris dapibus consectetur.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="service-block p-4 text-center">
                <div className="service-icon text-center">
                  <i className="tf-ion-ios-home-outline"></i>
                </div>
                <h3>Networking</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget
                  orci dictum facilisis vel id tellus. Nullam iaculis arcu at
                  mauris dapibus consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-skills section-sm" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title text-center">
                <h2>Our Skills</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus fugiat, vel veniam, eos et delectus eveniet
                  molestiae. Esse, voluptas ratione.
                </p>
                <div className="border"></div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="team-skills-content">
                <h2>Simple To Start</h2>
                <p>
                  Vestibulum nisl tortor, consectetur quis imperdiet bium,
                  letcu. Sedndime ntumiaculis ex, in faucibus lorem accumsan
                  non. Donec mattis tin unt metuorbi sed tort Igor aman luctus
                  dignissim. Vestibulum nisl tortor, consectetur quis imperdiet
                  bium, letcu. Sedndime ntumiaculis ex, in faucibus lorem
                  accumsan non.
                </p>
                <a href="" className="btn btn-main mt-20">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-6 col-md-offset-1">
              <div className="progress-block">
                <ul>
                  <li>
                    <span>Photoshop</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span>Web Application</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span>Andriod Application</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span>IOS Development</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="clients-slider" className="clients-logo-slider">
                <img src="images/client-logo/logo1.png" alt="" />
                <img src="images/client-logo/logo-2.png" alt="" />
                <img src="images/client-logo/logo-3.png" alt="" />
                <img src="images/client-logo/logo-4.png" alt="" />
                <img src="images/client-logo/logo-5.png" alt="" />
                <img src="images/client-logo/logo1.png" alt="" />
                <img src="images/client-logo/logo-2.png" alt="" />
                <img src="images/client-logo/logo-3.png" alt="" />
                <img src="images/client-logo/logo-4.png" alt="" />
                <img src="images/client-logo/logo-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-wrapper section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="title">
                <h2>Award-Winning Agency</h2>
                <p>
                  Vestibulum nisl tortor, consectetur quis imperdiet bibendum,
                  laoreet sed arcu. Sed condimentum iaculis ex, in faucibus
                  lorem accumsan non. Donec mattis tincidunt metus. Morbi sed
                  tortor a risus luctus dignissim.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div className="counters-item">
                <i className="tf-ion-ios-alarm-outline"></i>
                <div>
                  <span className="counter" data-count="150">
                    0
                  </span>
                </div>
                <h3>Happy Clients</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div className="counters-item">
                <i className="tf-ion-ios-analytics-outline"></i>
                <div>
                  <span className="counter" data-count="130">
                    0
                  </span>
                </div>
                <h3>Projects completed</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div className="counters-item">
                <i className="tf-ion-ios-compose-outline"></i>
                <div>
                  <span className="counter" data-count="99">
                    0
                  </span>
                </div>
                <h3>Positive feedback</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div className="counters-item kill-border">
                <i className="tf-ion-ios-bolt-outline"></i>
                <div>
                  <span className="counter" data-count="250">
                    0
                  </span>
                </div>
                <h3>Cups of Coffee</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial section" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-slider">
                <div className="item text-center">
                  <i className="tf-ion-chatbubbles"></i>

                  <div className="client-details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eum nulla, soluta dolorum. Eos earum, magni asperiores,
                      unde corporis labore, enim, voluptatum officiis voluptates
                      alias natus. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quia, officia. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Quod, quia?
                    </p>
                  </div>

                  <div className="client-thumb">
                    <img
                      src="images/client-logo/clients-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="client-meta">
                    <h3>William Martin</h3>
                    <span>CEO , Company Name</span>
                  </div>
                </div>

                <div className="item text-center">
                  <i className="tf-ion-chatbubbles"></i>

                  <div className="client-details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eum nulla, soluta dolorum. Eos earum, magni asperiores,
                      unde corporis labore, enim, voluptatum officiis voluptates
                      alias natus. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quia, officia. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Quod, quia?
                    </p>
                  </div>

                  <div className="client-thumb">
                    <img
                      src="images/client-logo/clients-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="client-meta">
                    <h3>Emma Harrison</h3>
                    <span>CEO , Company Name</span>
                  </div>
                </div>

                <div className="item text-center">
                  <i className="tf-ion-chatbubbles"></i>

                  <div className="client-details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eum nulla, soluta dolorum. Eos earum, magni asperiores,
                      unde corporis labore, enim, voluptatum officiis voluptates
                      alias natus. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quia, officia. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Quod, quia?
                    </p>
                  </div>

                  <div className="client-thumb">
                    <img
                      src="images/client-logo/clients-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="client-meta">
                    <h3>Alexander Lucas</h3>
                    <span>CEO , Company Name</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
