import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import Form from "./form.js";
import APIService from "../APIService.js";
import "./login.css";

function Login() {
  const [token, setToken] = useCookies(["token"]);
  const [isLogin, setIsLogin] = useState(true);
  let history = useHistory();

  useEffect(() => {
    if (token["token"]) {
      history.push("/");
    }
  }, [token]);

  const handleLogin = (username, password) => {
    APIService.loginUser(username, password)
      .then((data) => {
        setToken("token", data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (username, password) => {
    APIService.registerUser(username, password)
      .then((data) => {
        setIsLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      {isLogin ? (
        <>
          <Form
            input1Name="Username"
            input2Name="Password"
            input1Value=""
            input2Value=""
            input1Type="text"
            input2Type="password"
            buttonName="Login"
            buttonHandler={handleLogin}
          />
          <div className="message">
            <h3>
              If you don't have account, Please
              <button onClick={() => setIsLogin(false)}>Register</button>here
            </h3>
          </div>
        </>
      ) : (
        <>
          <Form
            input1Name="Username"
            input2Name="Password"
            input1Value=""
            input2Value=""
            input1Type="text"
            input2Type="password"
            buttonName="Register"
            buttonHandler={handleRegister}
          />
          <div className="message">
            <h3>
              If you have account, Please
              <button onClick={() => setIsLogin(true)}>Login</button>here
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
