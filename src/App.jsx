import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Route , Routes, BrowserRouter } from 'react-router'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {

  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={
      <ProtectedRoute>
          <Dashboard/>
      </ProtectedRoute>
    }/>
      </Routes>
    </Router>
 
  )
}

export default App