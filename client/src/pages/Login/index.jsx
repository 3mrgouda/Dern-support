import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export default function Login() {
  const loginReference = useRef(null);
  const { loginUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(loginReference.current);
    const data = Object.fromEntries(formData);
    localStorage.setItem("Email", `${data.email}`);
    loginUser(data);
  };

  return (
    <section
      id="login"
      className=" min-h-[65vh] flex items-center justify-center"
    >
      <div className="bg-white p-5 w-full max-w-sm">
        <div>
          <h1 className="text-3xl font-bold text-center">Login</h1>
        </div>

        <form
          className="pt-6 flex flex-col gap-2"
          onSubmit={handleSubmit}
          ref={loginReference}
        >
          <div className="grid">
            <label>Email:</label>
            <div className="bg-slate-100 p-2">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                className="w-full h-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label>Password:</label>
            <div className="bg-slate-100 p-2 flex">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                required
                className="w-full h-full outline-none bg-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
          >
            Login
          </button>
        </form>

        <p className="my-5 text-center">
          Don't have an account?
          <Link
            to="/register"
            className="text-red-600 hover:text-red-700 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
