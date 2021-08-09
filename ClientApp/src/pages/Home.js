import React from "react";
export default function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"
              alt="Third slide"
            />
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
      <section class="blog" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="title text-center ">
                <h2>
                  {" "}
                  BAŞLICA <span class="color">KATEGORİLER</span>
                </h2>
                <div class="border"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus facere accusamus, reprehenderit libero inventore nam.
                </p>
              </div>
            </div>
            <article class="col-md-3 col-sm-6 col-xs-12 clearfix ">
              <div class="post-item">
                <div class="media-wrapper">
                  <img
                    src="images/blog/post-1.jpg"
                    alt="amazing caves coverimage"
                    class="img-fluid"
                  />
                </div>

                <div class="content">
                  <h3>
                    <a href="single-post.html">Reasons to Smile</a>
                  </h3>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non skateboard dolor brunch.
                  </p>
                  <a class="btn btn-main" href="single-post.html">
                    Read more
                  </a>
                </div>
              </div>
            </article>

            <article class="col-md-3 col-sm-6 col-xs-12 ">
              <div class="post-item">
                <div class="media-wrapper">
                  <img
                    src="images/blog/post-2.jpg"
                    alt="amazing caves coverimage"
                    class="img-fluid"
                  />
                </div>

                <div class="content">
                  <h3>
                    <a href="single-post.html">A Few Moments</a>
                  </h3>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non skateboard dolor brunch.
                  </p>
                  <a class="btn btn-main" href="single-post.html">
                    Read more
                  </a>
                </div>
              </div>
            </article>
            <article class="col-md-3 col-sm-6 col-xs-12 ">
              <div class="post-item">
                <div class="media-wrapper">
                  <img
                    src="images/blog/post-3.jpg"
                    alt="amazing caves coverimage"
                    class="img-fluid"
                  />
                </div>

                <div class="content">
                  <h3>
                    <a href="single-post.html">Hints for Life</a>
                  </h3>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non skateboard dolor brunch.
                  </p>
                  <a class="btn btn-main" href="single-post.html">
                    Read more
                  </a>
                </div>
              </div>
            </article>
            <article class="col-md-3 col-sm-6 col-xs-12 ">
              <div class="post-item">
                <div class="media-wrapper">
                  <img
                    src="images/blog/post-3.jpg"
                    alt="amazing caves coverimage"
                    class="img-fluid"
                  />
                </div>

                <div class="content">
                  <h3>
                    <a href="single-post.html">Hints for Life</a>
                  </h3>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non skateboard dolor brunch.
                  </p>
                  <a class="btn btn-main" href="single-post.html">
                    Read more
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
