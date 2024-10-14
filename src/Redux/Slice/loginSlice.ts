import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState{
    loginData : any,
    userToken : string,
    isLoading : boolean,
    isSuccess : boolean,
    isError : boolean
}

const initialState : InitialState = {
    loginData : {},
    userToken : "",
    isLoading : false,
    isSuccess : false,
    isError : false,
}

const loginSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(LoginUser.pending,(state,action)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(LoginUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.loginData = action.payload?.data.data
            localStorage.setItem("token",action.payload?.data.data.token)
        })
        .addCase(LoginUser.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
    }
})

export const LoginUser = createAsyncThunk(
    "USER/LOGIN",
    async (userData: any) => {
        try {
            const response = axios.post("https://node-js-wse4.onrender.com/user/login", userData)
            // toast.success('Logged in!')
            console.log(response)
            return response
        } catch (error) {
            
        }
    }
)

export default loginSlice.reducer