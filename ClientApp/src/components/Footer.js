import React, { Component } from 'react';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer id="footer" class="bg-one">
                <div class="top-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <h3>about</h3>
                                <p>Integer posuere erat a ante venenati dapibus posuere velit aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
                            </div>


                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <ul>
                                    <li><h3>Our Services</h3></li>
                                    <li><a href="#">Graphic Design</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Web Development</a></li>
                                </ul>
                            </div>

                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <ul>
                                    <li><h3>Quick Links</h3></li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">FAQ’s</a></li>
                                    <li><a href="#">Badges</a></li>
                                </ul>
                            </div>

                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <ul>
                                    <li><h3>Connect with us Socially</h3></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Youtube</a></li>
                                    <li><a href="#">Pinterest</a></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <h5>Copyright 2016. All rights reserved.</h5>
                    <h6>Design and Developed by <a href="">Themefisher</a></h6>
                    <h6>Distributed by <a href="https://themewagon.com/">Themewagon</a></h6>
                </div>
            </footer>
        );
    }
}