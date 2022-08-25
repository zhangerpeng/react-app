import React from "react";
import './css/app.sass';

const Login = () => {
  return (
    <div className="container">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="text" placeholder="Emial" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="text" placeholder="Password" />
        </div>
      </div>

      <div class="control">
        <button class="button is-fullwidth is-primary">Login</button>
      </div>
    </div>
  );
};
export default Login;
