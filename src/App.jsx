import React from "react";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import BookAppointment from "./pages/BookAppointment"
import MyAppointment from "./pages/MyAppointment"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import DoctorDashboard from "./pages/DoctorDashboard";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


<Route
          path="/book-appointment"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />


     <Route
          path="/my-appointment"
          element={
            <ProtectedRoute>
              <MyAppointment />
            </ProtectedRoute>
          }
        />


      <Route
          path="/doctor-dashboard"
          element={
            <ProtectedRoute>

              <DoctorDashboard />
             
            </ProtectedRoute>
          }
        />



      </Routes>
    </Router>
  );
};

export default App;
