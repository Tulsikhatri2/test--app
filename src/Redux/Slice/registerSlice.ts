import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


interface InitialState {
    registerData : any,
    isLoading : boolean,
    isSuccess : boolean,
    isError : boolean
}

const initialState : InitialState ={
    registerData : {},
    isLoading: false,
    isSuccess:false,
    isError:false
}

const registerSlice = createSlice({
    name: "register",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state,action)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            console.log(action.payload,"from slice")
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.registerData = action.payload?.data.data
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
    }
})

export const registerUser = createAsyncThunk(
    "REGISTER/USER",
    async(registerUserData: any)=>{
        try {
            const response = axios.post("https://node-js-wse4.onrender.com/user",registerUserData)
            
            return response
        } catch (error) {
            
        }
    }
)

export default registerSlice.reducer
