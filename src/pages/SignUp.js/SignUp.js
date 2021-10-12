import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getUser } from "../../redux/userSlice/userSlice";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      name,
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

    fetch(
      process.env.REACT_APP_VERCEL_URL_REGISTER,
      config
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        fetchUserData();
        history.replace(from);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };

  const fetchUserData = () => {
    const url = process.env.REACT_APP_VERCEL_URL_FETCH_USER_DATA;
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
                Create Account
              </h1>

              <form className="mt-6" onSubmit={signup}>
                {error && <p className="form_error">{error}</p>}

                <div>
                  <label className="block text-gary-700">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2
                     border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autoFocus
                    autoComplete="true"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name=""
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2
                     border focus:border-blue-500 focus:bg-white focus:outline-none"
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

                <button
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400
                   focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                  disabled={loading ? true : false}
                >
                  {loading ? "Loading..." : "SignUp"}
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
                  <span className="ml-4">SignUp in with Google</span>
                </div>
              </button>

              <p className="mt-8">
                Already have an account?
                <span
                  onClick={() => history.push("/login")}
                  className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2"
                >
                  LogIn
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
