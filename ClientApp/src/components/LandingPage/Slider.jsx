// import { React } from "react";
import React, { Component, Fragment } from 'react';

const Slider = () => {
    return (
        <Fragment>
            {/* <div className="hero-slider slick-initialized slick-slider">
                <button type="button" className="prevArrow slick-arrow" style={{ display: "block" }}></button>
                <div className="slick-list draggable">
                    <div className="slick-track" style={{opacity: 1,width: "400vw", transform: "translate3d(-100vw, 0px, 0px)"}}>
                        
                        <div className="slider-item th-fullpage hero-area slick-slide slick-current slick-active" data-slick-index="0"  tabindex="0" aria-hidden="true" style={{ width:"100vw",backgroundImage: "url(images/slider/slider-bg-2.jpg)" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h1 data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".1">We Combine Design and Creativity</h1>
                                        <p data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".5">Create just what you need for your Perfect Website. Choose from a wide range of Elements simply put them on our Canvas.</p>
                                        <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn btn-main fadeInUp animated" href="service.html" tabindex="0" style={{ opacity: 1, animationDelay: "0.8s", animationDuration: "0.3s" }}>Explore Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item th-fullpage hero-area slick-slide" data-slick-index="-1" tabindex="-1" aria-hidden="true" style={{ width:"100vw",backgroundImage: "url(images/slider/slider-bg-1.jpg)" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Crafting Digital Experience</h1>
                                        <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veritatis tempore nostrum id officia quaerat eum corrupti,ipsa aliquam velit.</p>
                                        <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn btn-main" href="service.html">Explore Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="nextArrow slick-arrow" style={{ display: "block" }}></button>
            </div> */}


            <div className="hero-slider">
                <div className="slider-item th-fullpage hero-area" style={{ backgroundImage: "url(images/slider/slider-bg-1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Crafting Digital
                                    Experience</h1>
                                <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Quod,  veritatis tempore nostrum id
							officia quaerat eum corrupti,  ipsa aliquam velit.</p>
                                <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn btn-main"
                                    href="service.html">Explore Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item th-fullpage hero-area" style={{ backgroundImage: "url(images/slider/slider-bg-2.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".1">We Combine Design
                                and
							Creativity</h1>
                                <p data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".5">Create just what you
                                need
                                for your Perfect Website. Choose from a wide range
							 of Elements simply put them on our Canvas.</p>
                                <a data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".8" className="btn btn-main"
                                    href="service.html">Explore Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Slider;