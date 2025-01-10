import React, { useState } from "react";
import { NavLink } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/authSlice";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
const[role , setRole] = useState("patient")
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRegister =async (e) => {
    e.preventDefault();
    const result = await dispatch(register({ email, password, name , role}));

    console.log(result.type);
    
    if (result.type === "auth/register/fulfilled") {
      navigate("/");
    }
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2 class="text-center text-white mt-5">Register Form</h2>

          <div class="card my-5" style={{background:" #1A1D21F5"}}>
            <form
              class="card-body cardbody-color p-lg-5"
              onSubmit={handleRegister}
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
              <label className="form-label">Name</label>

                <input
                  type="text"
                  class="form-control"
                  id="Fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Full Name"
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
                  required
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
              <label className="form-label">Password</label>

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
                <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                  Register
                </button>
              </div>
              <div id="emailHelp" class="form-text text-center mb-5 text-white fw-bolder fs-5">
                Already have an Account ?{" "}
                <a class="text-dark fw-bold">
                  <NavLink to="/">Log In</NavLink>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
