// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";
import patientReducer from "../features/patientSlice.js";
import userReducer from "../features/userSlice.js"
const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer, 
    user: userReducer,
  },
});

export default store;
