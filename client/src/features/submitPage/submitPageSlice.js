import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  dataProctection: false,
  isValidName: false,
  isValidEmail: false,
  isValidPhone: false,
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
    switchDataProtection: (state) => {
      state.dataProctection = !state.dataProctection
    },
    setIsValidName: (state,action) => {
      state.isValidName = action.payload
    },
    setIsValidEmail: (state,action) => {
      state.isValidEmail = action.payload
    },
    setIsValidPhone: (state,action) => {
      state.isValidPhone = action.payload
    }
  }
})

export const selectSubmitSlice = (state) => state.submit
export const selectName = (state) => state.submit.name
export const selectEmail = (state) => state.submit.email
export const selectPhone = (state) => state.submit.phone
export const selectDataProtection = (state) => state.submit.dataProctection
export const selectIsValidName = (state) => state.submit.isValidName
export const selectIsValidEmail = (state) => state.submit.isValidEmail
export const selectIsValidPhone = (state) => state.submit.isValidPhone


export const {setIsValidPhone,setIsValidEmail,setIsValidName,switchDataProtection,setName,setEmail,setPhone} = submitSlice.actions;

export default submitSlice.reducer