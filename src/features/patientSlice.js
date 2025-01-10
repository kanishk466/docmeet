// src/features/patientSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientInfo: null, 
  patientId:null,
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatientInfo(state, action) {
      state.patientInfo = action.payload;
      state.patientId = action.payload.patientId;

    },
    clearPatientInfo(state) {
      state.patientInfo = null;
      state.patientId = null;

    },
  },
});

export const { setPatientInfo, clearPatientInfo } = patientSlice.actions;
export default patientSlice.reducer;
