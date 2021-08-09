import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./login.css";
export default function Login() {
  let history = useHistory();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [username, setUsername] = useState();

  const [password, setPassword] = useState();

  const handleChangePassword = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setPassword(e.target.value);
  };
  function handlePanel() {
    history.push("/Panel");
  }
  const login = () => {
    axios
      .post("https://localhost:44359/api/user/login", loginData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("auth", response.data);
        console.log(localStorage.getItem("auth"));
        handlePanel();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setLoginData({
      username: password,
      password: username,
    });
  }, [password, username]);

  return (
    <>
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Sign In</h3>
              <div class="d-flex justify-content-end social_icon">
                <span>
                  <i class="fab fa-facebook-square"></i>
                </span>
                <span>
                  <i class="fab fa-google-plus-square"></i>
                </span>
                <span>
                  <i class="fab fa-twitter-square"></i>
                </span>
              </div>
            </div>
            <div class="card-body">
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="username"
                  onChange={(event) => {
                    handleChangeUsername(event);
                  }}
                />
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  onChange={(event) => {
                    handleChangePassword(event);
                  }}
                />
              </div>
              <div class="form-group">
                <input
                  type="button"
                  value="Login"
                  class="btn float-right login_btn"
                  onClick={login}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
