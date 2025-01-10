import React, { useState } from "react";
import { NavLink } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router";



import SkeletonLoader  from "../components/SkeletonLoader"


const Login = () => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading,  error } = useSelector(
    (state) => state.auth
  );

  const userRole = useSelector((state)=> state.auth.role);


  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));


    if((result.payload.user.role) === userRole){
      navigate("/dashboard"); 
    }
    else{
      navigate("/doctor-dashboard"); 
    }

   
  };
  return (

    <>
    {
      isLoading ?(
        <SkeletonLoader/>
      
    ):

      (
        <div class="container" >
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-white mt-5">Hi there, ....</h2>
            <p class="text-center text-white mt-2">Get Started with Appointments.</p>

            <div class="card my-5" style={{background:" #1A1D21F5"}}>
              <form
                class="card-body cardbody-color p-lg-5"
                onSubmit={handleLogin}
              >
                <div class="text-center">
                  <img
                    src="https://images.pexels.com/photos/8376176/pexels-photo-8376176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>
  
                <div class="mb-3">
                <label className="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div class="mb-3">
                <label className="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-color px-5 mb-5 w-100"
                 
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                </div>
                <div id="emailHelp" class="form-text text-center mb-5 text-white fw-bolder fs-5">
                  Not Registered ?{" "}
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
