//Import React
import React from "react";

//Import Components
import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";
import LoginForm from "../forms/loginForm";

//Display Login
const Login = () => {
  return (
    <React.Fragment>
      <NavBar />
      <LoginForm />
      <Footer />
    </React.Fragment>
  );
};

export default Login;
