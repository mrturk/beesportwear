import React from "react";
export default function Login(props) {



    const onLogin = () => {
        props.setLoginStatus(true);
        props.setActivePage("Home");
    }

    return (
        <>
            <section class="single-page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Giriş Yap</h2>
                            <ol class="breadcrumb header-bradcrumb">

                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-us" id="contact">
                <div class="container">
                    <div class="row">


                        <div class="col-12">
                            <div class="title text-center" >
                                <h2>Giriş Yap</h2>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis eveniet maiores ab maxime nam ut numquam molestiae quaerat incidunt?</p> */}
                                <div class="border"></div>
                            </div>
                        </div>

                        {/* <div class="contact-details col-md-6 " >
                            <h3>Contact Details</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore adipisci.</p>
                            <ul class="contact-short-info" >
                                <li>
                                    <i class="tf-ion-ios-home"></i>
                                    <span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
                                </li>
                                <li>
                                    <i class="tf-ion-android-phone-portrait"></i>
                                    <span>Phone: +880-31-000-000</span>
                                </li>
                                <li>
                                    <i class="tf-ion-android-globe"></i>
                                    <span>Fax: +880-31-000-000</span>
                                </li>
                                <li>
                                    <i class="tf-ion-android-mail"></i>
                                    <span>Email: hello@meghna.com</span>
                                </li>
                            </ul>

                            <div class="social-icon">
                                <ul>
                                    <li><a href="#"><i class="tf-ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="tf-ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i class="tf-ion-social-dribbble-outline"></i></a></li>
                                    <li><a href="#"><i class="tf-ion-social-linkedin-outline"></i></a></li>
                                </ul>
                            </div>

                        </div> */}

                        <div class="col-3">

                        </div>

                        <div class="contact-form col-md-6 " >
                            <form id="contact-form" role="form">
                                <div class="form-group">
                                    <input type="text" placeholder="Kullanıcı Adı" class="form-control" name="name" id="name" />
                                </div>

                                <div class="form-group">
                                    <input type="email" placeholder="Şifre" class="form-control" name="email" id="email" />
                                </div>

                                <div id="success" class="success">
                                    Thank you. The Mailman is on His Way :)
                                </div>

                                <div id="error" class="error">
                                    Sorry, don't know what happened. Try later :(
                                </div>
                                <div id="cf-submit">
                                    <input id="contact-submit" class="btn btn-transparent" value="Giriş Yap" onClick={() => onLogin()} />
                                </div>

                            </form>
                        </div>

                        <div class="col-3">

                        </div>


                    </div>
                </div>
            </section>




        </>
    )
}
