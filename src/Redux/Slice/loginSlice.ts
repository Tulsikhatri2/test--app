import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

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
    async (userData: any,{ rejectWithValue }) => {
        try {
            const response = await axios.post("https://node-js-wse4.onrender.com/user/login", userData)
            return response
        } catch (error: any) {
            console.log( "error from slice",error)
            toast.error(error.response?.data?.message || error.message,{duration: 2000})
            return rejectWithValue(error?.response)
            // throw error            // 
        }
    }
)

export default loginSlice.reducer