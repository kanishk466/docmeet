import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { useSelector } from "react-redux";






export const fetchUserData = createAsyncThunk('user/fetchUserData', async (id,token) => {
    const response = await fetch(`https://doctor-appointment-backend-p0ms.onrender.com/api/patient/${id}`,{
      
        headers: { Authorization: `${token}` },
      
    });
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  });



  
export const fetchAppointments = createAsyncThunk('user/fetchAppointments', async (token) => {
  const response = await fetch('https://doctor-appointment-backend-p0ms.onrender.com/api/appointments/doctor',{
    headers: { Authorization: `${token}` },
  });
  const jsonData = await response.json();
  return jsonData;
});


  export const userSlice = createSlice({
    name: 'user',
    initialState: { data: null, doctorData:null , loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })

        .addCase(fetchAppointments.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchAppointments.fulfilled, (state, action) => {
          state.loading = false;
          state.doctorData = action.payload;
        })
        .addCase(fetchAppointments.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });



        
    },
  });


  export default userSlice.reducer;