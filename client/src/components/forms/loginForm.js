//Import React
import React from "react";

const LoginForm = () => {
  return (
    <div class="form-container">
      <form class="login-form">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>login</button>
        <p>
          Not Registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
