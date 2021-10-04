import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getUser } from "../../redux/userSlice/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const loginHandler = (e) => {
    e.preventDefault();

    setLoading(true);
    const user = {
      email,
      password,
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("https://stormy-woodland-67379.herokuapp.com/auth/user/login", config)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        fetchUserData();
        history.replace(from);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchUserData = () => {
    const url = "https://stormy-woodland-67379.herokuapp.com/auth/user/profile";
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getUser(data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="min-h-screen">
        <section className="flex flex-row h-screen items-center">
          <div
            className="bg-white w-full md:max-w-md lg:max-w-full
             md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
          >
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>

              <form className="mt-6" onSubmit={loginHandler}>
                {error && <p className="text-red-500">{error}</p>}
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name=""
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2
                     border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autoFocus
                    autoComplete="true"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name=""
                    placeholder="Enter Password"
                    minLength="6"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200
                     mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-right mt-2">
                  <button
                    href="#"
                    className="text-sm font-semibold text-gray-700
                     hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400
                   focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                  disabled={loading ? true : false}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </form>

              <hr className="my-6 border-gray-300 w-full" />

              <button
                type="button"
                className="w-full block bg-white hover:bg-gray-100 
                focus:bg-gray-100 text-gray-900 font-semibold 
                rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <FcGoogle />
                  </div>
                  <span className="ml-4">Log in with Google</span>
                </div>
              </button>

              <p className="mt-8">
                Need an account?
                <a
                  href="https://devex.vercel.app/"
                  onClick={() => history.push("/signup")}
                  className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
