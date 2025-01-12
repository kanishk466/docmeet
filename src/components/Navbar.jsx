import React from "react";
import { NavLink, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Clear Redux state
    navigate("/"); // Redirect to login page
  };

  const role = useSelector((state) => state.auth.role);
  const username = useSelector((state)=>state.auth.user.name)
  const email = useSelector((state)=>state.auth.user.email)


  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary shadow-sm">
        <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
                <svg class="me-2" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
                DoctorMeeting
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                {role === "patient" ? (
              <>
                <li class="nav-item">
                  <a class="nav-link">
                    {" "}
                    <NavLink to="/dashboard"> Profile</NavLink>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link">
                    {" "}
                    <NavLink to="/book-appointment"> Book Appointment</NavLink>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link">
                    {" "}
                    <NavLink to="/my-appointment">My Appointment</NavLink>
                  </a>
                </li>
              </>
            ) : 
            
            (
              <li class="nav-item">
                <a class="nav-link">
                  
                  <NavLink to="/doctor-dashboard">Doctor Dashboard</NavLink>
                </a>
              </li>
            )}

                </ul>




          
                <button class="profile-btn d-flex align-items-center mx-3" data-bs-toggle="modal" data-bs-target="#profileModal">
                  
                    <span>{username.toUpperCase()}</span>
                </button>


                <button class="profile-btn d-flex align-items-center" onClick={handleLogout}>
                  
                  <span>Log Out</span>
              </button>
            </div>
        </div>
    </nav>



    <div class="modal fade" id="profileModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-white-50">
                <div class="modal-header border-0">
                    <h5 class="modal-title">Profile</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
               
                    <h4>{username.toUpperCase()}</h4>
                    <p class="text">{email}</p>
                   
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;