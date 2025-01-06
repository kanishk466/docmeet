import React, { useState } from "react";
import { NavLink } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading,  error } = useSelector(
    (state) => state.auth
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));

    console.log(result.type);
    if (result.type === "auth/login/fulfilled") {
      navigate("/dashboard");
    }
  };
  return (

    <>
    {
      isLoading ?(
        <div class="animate-pulse">
        <div class="mb-3">
          <div class="h-4 bg-gray-200 rounded w-1/4"></div>
          <div class="h-10 bg-gray-200 rounded w-full mt-2"></div>
          <div class="h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
        </div>
        <div class="mb-3">
          <div class="h-4 bg-gray-200 rounded w-1/4"></div>
          <div class="h-10 bg-gray-200 rounded w-full mt-2"></div>
        </div>
        <div class="mb-3">
          <div class="h-4 bg-gray-200 rounded w-1/4"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
        </div>
        <div class="h-10 bg-gray-200 rounded w-1/3 mt-2"></div>
      </div>
      
    ):

      (
        <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-white mt-5">Login Form</h2>
            <div class="card my-5">
              <form
                class="card-body cardbody-color p-lg-5"
                onSubmit={handleLogin}
              >
                <div class="text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                    class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>
  
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-color px-5 mb-5 w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                </div>
                <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                  Not Registered?{" "}
                  <a class="text-dark fw-bold">
                    <NavLink to="/register">Register</NavLink>
                  </a>
                </div>
              </form>
  
              {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
          </div>
        </div>
      </div>
      )
    }
    
    
   
    </>
  
  );
};

export default Login;
