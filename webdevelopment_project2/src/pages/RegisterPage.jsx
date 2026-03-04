import React from "react";
function RegisterPage() {
  return (
    <section className="page card form-page">
      <h1>Register</h1>
      <form className="auth-form">
        <label>
          Username
          <input type="text" name="username" placeholder="Choose username" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Create password" />
        </label>
        <label>
          Verify Password
          <input type="password" name="verifyPassword" placeholder="Verify password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default RegisterPage;
