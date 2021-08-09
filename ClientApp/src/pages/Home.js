import React from "react";
export default function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        style={{ height: "100vh", width: "100vw" }}
      >
        <ol class="carousel-indicators" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style={{ marginTop: "-50px" }}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{ marginTop: "-50px" }}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{ marginTop: "-50px" }}></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="images/client-logo/Products.jpg"
              alt="First slide"
              style={{ width: "99vw", height: "99vh" }}
            />
            <div class="carousel-caption d-none d-md-block" style={{ alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <h2>Bee SportsWear</h2>
            </div>
          </div>
          <div class="carousel-item" style={{ width: "100vw", height: "98vh" }}>
            <img
              class="d-block w-100"
              src="images/client-logo/Home2.jpg"
              alt="Second slide"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div class="carousel-caption d-none d-md-block" style={{ alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <h2>Bee SportsWear</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="images/client-logo/Home3.jpg"
              alt="Third slide"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div class="carousel-caption d-none d-md-block" style={{ alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <h2>Bee SportsWear</h2>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <section class="service-2 section">
        <div class="container">
          <div class="row">

            <div class="col-12">

              <div class="title text-center">
                <h2>What Do We Offer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,
                  consectetur
                  adipisicing elit. Voluptates, earum. </p>
                <div class="border"></div>
              </div>

            </div>

            <div class="col-md-4 text-center">
              <img src="images/about/member.jpg" class="inline-block" alt="" />
            </div>
            <div class="col-md-8">
              <div class="row text-center">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="service-item">
                    <i class="tf-ion-ios-alarm-outline"></i>
                    <h4>Time Management</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
                      venenatis.</p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="service-item">
                    <i class="tf-ion-ios-briefcase-outline"></i>
                    <h4>Marketing Ideas</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
                      venenatis.</p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="service-item">
                    <i class="tf-ion-ios-email-outline"></i>
                    <h4>Mail Support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
                      venenatis.</p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="service-item">
                    <i class="tf-ion-ios-locked-outline"></i>
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


      <section class="about-2 section" id="about">
        <div class="container">
          <div class="row">


            <div class="col-12">
              <div class="title text-center">
                <h2>We Are Bingo Agency</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit accusamus
                  labore iusto,
                  aut, eum itaque illo totam tempora eius.</p>
                <div class="border"></div>
              </div>
            </div>


            <div class="col-md-6">
              <img src="images/about/about-2.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-6">
              <ul class="checklist">
                <li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis
                  vestibulum.</li>
                <li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                <li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis
                  vestibulum.</li>
                <li>Etiam porta sem multipage evint landing magna mollis euismod a pharetra augue.</li>
                <li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
              </ul>
              <a href="#" class="btn btn-main mt-20">Learn More</a>
            </div>
          </div>
        </div>
      </section>




      {/* <section class="call-to-action section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Let's Create Something Together</h2>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor, <br /> nisi elit
                consequat ipsum, nesagittis sem nid elit. Duis sed odio sitain elit.</p>
              <a href="" class="btn btn-main">Contact Us</a>
            </div>
          </div>
        </div>
      </section> */}



      <section class="counter-wrapper section-sm">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="title">
                <h2>Award-Winning Agency</h2>
                <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed
                  condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi
                  sed tortor a risus luctus dignissim.</p>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div class="counters-item">
                <i class="tf-ion-ios-alarm-outline"></i>
                <div>
                  <span class="counter" data-count="150">0</span>
                </div>
                <h3>Happy Clients</h3>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div class="counters-item">
                <i class="tf-ion-ios-analytics-outline"></i>
                <div>
                  <span class="counter" data-count="130">0</span>
                </div>
                <h3>Projects completed</h3>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div class="counters-item">
                <i class="tf-ion-ios-compose-outline"></i>
                <div>
                  <span class="counter" data-count="99">0</span>
                </div>
                <h3>Positive feedback</h3>

              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div class="counters-item kill-border">
                <i class="tf-ion-ios-bolt-outline"></i>
                <div>
                  <span class="counter" data-count="250">0</span>
                </div>
                <h3>Cups of Coffee</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section class="testimonial section" id="testimonial">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">

              <div class="testimonial-slider">

                <div class="item text-center">
                  <i class="tf-ion-chatbubbles"></i>

                  <div class="client-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum.
                      Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis
                      voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?
                    </p>
                  </div>

                  <div class="client-thumb">
                    <img src="images/client-logo/clients-1.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="client-meta">
                    <h3>William Martin</h3>
                    <span>CEO , Company Name</span>
                  </div>
                </div>

                <div class="item text-center">
                  <i class="tf-ion-chatbubbles"></i>
                  <div class="client-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum.
                      Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis
                      voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?
                    </p>
                  </div>

                  <div class="client-thumb">
                    <img src="images/client-logo/clients-2.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="client-meta">
                    <h3>Emma Harrison</h3>
                    <span>CEO , Company Name</span>
                  </div>
                </div>

                <div class="item text-center">
                  <i class="tf-ion-chatbubbles"></i>
                  <div class="client-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum.
                      Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis
                      voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?
                    </p>
                  </div>

                  <div class="client-thumb">
                    <img src="images/client-logo/clients-3.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="client-meta">
                    <h3>Alexander Lucas</h3>
                    <span>CEO , Company Name</span>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section> */}



      <section class="blog" id="blog">
        <div class="container">
          <div class="row">

            <div class="col-12">
              <div class="title text-center ">
                <h2> Popüler <span class="color">Ürünler</span></h2>
                <div class="border"></div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere accusamus,
                  reprehenderit libero
                  inventore nam.</p> */}
              </div>
            </div>

            <article class="col-md-4 col-sm-6 col-xs-12 clearfix ">
              <div class="post-item">
                <div class="media-wrapper">
                  <img src="images/blog/post-1.jpg" alt="amazing caves coverimage" class="img-fluid" />
                </div>

                <div class="content">
                  <h3><a href="single-post.html">Reasons to Smile</a></h3>
                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                    squid. 3 wolf
                    moon officia aute, non skateboard dolor brunch.</p>
                  <a class="btn btn-main" href="single-post.html">İncele</a>
                </div>
              </div>
            </article>



            <article class="col-md-4 col-sm-6 col-xs-12 ">
              <div class="post-item">
                <div class="media-wrapper">
                  <img src="images/blog/post-2.jpg" alt="amazing caves coverimage" class="img-fluid" />
                </div>

                <div class="content">
                  <h3><a href="single-post.html">A Few Moments</a></h3>
                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                    squid. 3 wolf
                    moon officia aute, non skateboard dolor brunch.</p>
                  <a class="btn btn-main" href="single-post.html">İncele</a>
                </div>
              </div>
            </article>



            <article class="col-md-4 col-sm-6 col-xs-12 ">
              <div class="post-item">
                <div class="media-wrapper">
                  <img src="images/blog/post-3.jpg" alt="amazing caves coverimage" class="img-fluid" />
                </div>

                <div class="content">
                  <h3><a href="single-post.html">Hints for Life</a></h3>
                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                    squid. 3 wolf
                    moon officia aute, non skateboard dolor brunch.</p>
                  <a class="btn btn-main" href="single-post.html">İncele</a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </>
  );
}
