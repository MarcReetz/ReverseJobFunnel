import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  dataProctection: false,
};

export const submitSlice = createSlice({
  name: "submit",
  initialState,
  reducers: {
    setName: (state,action) => {
      state.name = action.payload
    },
    setEmail: (state,action) => {
      state.email = action.payload
    },
    setPhone: (state,action) => {
      state.phone = action.payload
    },
    switchtDataProtection: (state) => {
      state.dataProctection = !state.dataProctection
    }
  }
})

export const selectSubmitSlice = (state) => state.submit
export const selectName = (state) => state.submit.name
export const selectEmail = (state) => state.submit.email
export const selectPhone = (state) => state.submit.phone
export const selectDataProtection = (state) => state.submit.dataProctection

export const {switchtDataProtection,setName,setEmail,setPhone} = submitSlice.actions;

export default submitSlice.reducer