
import React, { useState } from "react";
import axios from 'axios';
import { message } from "antd";

export default function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        const payload = { username: username, password: password };
        axios.post('http://www.beesportwear.com/api/User/login', payload)
            .then(response => {
                if (response.data) {
                    props.setLoginStatus(true);
                    props.setActivePage("Home");
                }
                else {
                    message.warning({
                        content: 'Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyiniz...',
                        className: 'custom-class',
                        style: {
                            marginTop: '20vh',
                        },
                    });
                }
            }).catch(err => {
                message.warning({
                    content: 'Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyiniz...',
                    className: 'custom-class',
                    style: {
                        marginTop: '20vh',
                    },
                });
            })
    }

    return (
        <>
            <section className="single-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Giriş Yap</h2>
                            <ol className="breadcrumb header-bradcrumb">

                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-us" id="contact">
                <div className="container">
                    <div className="row">


                        <div className="col-12">
                            <div className="title text-center" >
                                <h2>Giriş Yap</h2>
                                <div className="border"></div>
                            </div>
                        </div>

                        <div className="col-3">

                        </div>

                        <div className="contact-form col-md-6 " >
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Kullanıcı Adı" className="form-control" name="name" id="name" onChange={(args) => setUsername(args.target.value)} />
                                </div>

                                <div className="form-group">
                                    <input type="password" placeholder="Şifre" className="form-control" name="email" id="email" onChange={(args) => setPassword(args.target.value)} />
                                </div>
                                <div>
                                    <input id="contact-submit" className="btn btn-transparent" value="Giriş Yap" onClick={() => onLogin()} />
                                    {/* <button id="contact-submit" onClick={() => onLogin()} className="btn btn-transparent">Giriş Yap</button> */}
                                </div>

                            </form>
                        </div>

                        <div className="col-3">

                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}
