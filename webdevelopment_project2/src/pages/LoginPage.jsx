import React from "react";
function LoginPage() {
  return (
    <section className="page card form-page">
      <h1>Login</h1>
      <form className="auth-form">
        <label>
          Username
          <input type="text" name="username" placeholder="Enter username" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default LoginPage;
