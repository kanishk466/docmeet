import React from 'react'
import {NavLink , useNavigate} from "react-router"
import { useSelector , useDispatch } from 'react-redux';
import { logout } from "../features/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Clear Redux state
    navigate("/"); // Redirect to login page
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li class="nav-item">
            <a class="nav-link"> <NavLink  to='/'>Login</NavLink></a>
           
          </li>


          <li class="nav-item">
            <a class="nav-link"> <NavLink  to='/register'>Register</NavLink></a>
           
          </li>


          <button type="button" class="btn btn-outline-primary"  onClick={handleLogout}>Logout</button>
      
         
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar