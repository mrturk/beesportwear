// import { React } from "react";
import React, { Component, Fragment, useState } from 'react';
import { Carousel } from 'antd';

// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };

const Slider = () => {

    // const [sliders, setSliders] = useState([{ id: "0", active: true }, { id: "1", active: false }, { id: "2", active: false }]);

    // const onClickRightButton = () => {
    //     let index = sliders.findIndex(i => i.active);
    //     let __sliders = sliders;
    //     if (sliders.length - 1 === index) {
    //         __sliders[__sliders.length]['active'] = false;
    //         __sliders[0]["active"] = true;
    //         setSliders(__sliders);
    //     }
    //     else {
    //         __sliders[index]['active'] = false;
    //         __sliders[index + 1]["active"] = true;
    //         setSliders(__sliders);
    //     }
    // }

    // const onClickLeftButton = () => {
    //     let index = __sliders.findIndex(i => i.active);
    //     let __sliders = sliders;
    //     if (0 === index) {
    //         __sliders[0]['active'] = false;
    //         __sliders[__sliders.length]["active"] = true;
    //         setSliders(__sliders);
    //     }
    //     else {
    //         __sliders[index]['active'] = false;
    //         __sliders[index - 1]["active"] = true;
    //         setSliders(__sliders);
    //     }
    // }



    return (
        <Fragment>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">

                    {/* <div className={sliders.find(i => i.active).id === "0" ? "carousel-item active" : "carousel-item"} style={{ width: "100vw", height: "100vh" }}>
                        <img src="images/slider/slider-bg-1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className={sliders.find(i => i.active).id === "1" ? "carousel-item active" : "carousel-item"} style={{ width: "100vw", height: "100vh" }}>
                        <img src="images/slider/slider-bg-2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div className={sliders.find(i => i.active).id === "2" ? "carousel-item active" : "carousel-item"} style={{ width: "100vw", height: "100vh" }}>
                        <img src="images/slider/slider-bg-2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div> */}

                    <div className={"carousel-item active"} style={{ width: "100vw", height: "100vh" }}>
                        <img src="images/slider/slider-bg-1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className={"carousel-item"} style={{ width: "100vw", height: "100vh" }}>
                        <img src="images/slider/slider-bg-2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div className={"carousel-item"} style={{ width: "100vw", height: "100vh" }}>
                        <img src="images/slider/slider-bg-2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={onClickLeftButton}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={onClickRightButton}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}

            </div>

        </Fragment>
    );
}

export default Slider;