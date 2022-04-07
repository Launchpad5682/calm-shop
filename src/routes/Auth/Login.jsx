import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../context/auth-context";
import "./Auth.css";

export function Login() {
  const [form, setForm] = useState({
    email: "saurabhsuthar@gmail.com",
    password: "qwerty1234",
  });
  const { login, token } = useAuthProvider();
  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();
    login(form.email, form.password);
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const changeHandler = (event) => {
    const type = event.target.type;
    if (type === "email") {
      setForm((prev) => ({ ...prev, email: event.target.value }));
    }
    setForm((prev) => ({ ...prev, password: event.target.password }));
  };
  return (
    <main className="main__form--section">
      <div className="form--container">
        <div className="h6__typography typogrpahy--black bold--typography center__typography">
          Login
        </div>
        <form onSubmit={loginHandler} className="form">
          <div className="inputbox__container">
            <input
              type="email"
              autoComplete="off"
              className="input--black"
              required
              value={form.email}
              onChange={changeHandler}
            />
            <label className="inputbox__label--name label__name--black inputbox__label--blue">
              <span className="inputbox__label--content">Email</span>
            </label>
          </div>
          <div className="inputbox__container">
            <input
              type="password"
              autoComplete="off"
              className="input--black"
              required
              value={form.password}
              onChange={changeHandler}
            />
            <label className="inputbox__label--name label__name--black inputbox__label--blue">
              <span className="inputbox__label--content">Password</span>
            </label>
          </div>
          <div className="row--between">
            <div className="input--check">
              <input type="checkbox" name="" id="remember-me" />
              <label className="subtitle1__typography" htmlFor="rememeber-me">
                Remember me
              </label>
            </div>
            <Link
              className="forgot--link subtitle1__typography bold--typography"
              to="/forgot-password"
            >
              Forgot Password
            </Link>
          </div>
          <button
            className="button--sm button__solid button--blue button__rounded--md fullwidth-btn bold--typography"
            type="submit"
          >
            <span className="subtitle1__typography typography--white bold--typography">
              Login
            </span>
          </button>
          <button className="button--sm button__outline button__outline--blue button__rounded--sm button__icon button__icon fullwidth-btn bold--typography">
            <span className="subtitle1__typography typography--blue">
              Create an account
            </span>
            <span className="fa fa-arrow-right icon__typography typography--blue"></span>
          </button>
        </form>
      </div>
    </main>
  );
}
