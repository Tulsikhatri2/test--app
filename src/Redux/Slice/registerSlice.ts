import { copilotRuntimeNextJSPagesRouterEndpoint } from "@copilotkit/runtime";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

interface InitialState {
  registerData: any;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isVerificationLoading: boolean;
  isVerificationSuccess: boolean;
  isVerificationError: boolean;
}

const initialState: InitialState = {
  registerData: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  isVerificationLoading: false,
  isVerificationSuccess: false,
  isVerificationError: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload, "from slice");
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.registerData = action.payload?.data.data;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(emailVerificationProcess.pending, (state, action) => {
        state.isVerificationLoading = true;
        state.isVerificationSuccess = false;
        state.isVerificationError = false;
      })
      .addCase(emailVerificationProcess.fulfilled, (state, action) => {
        console.log(action.payload, "verification response");
        state.isVerificationLoading = false;
        state.isVerificationSuccess = true;
        state.isVerificationError = false;
      })
      .addCase(emailVerificationProcess.rejected, (state, action) => {
        state.isVerificationLoading = false;
        state.isVerificationSuccess = false;
        state.isVerificationError = true;
      });
  },
});

export const registerUser = createAsyncThunk(
  "REGISTER/USER",
  async (registerUserData: any) => {
    try {
      const response = axios.post(
        "https://node-js-wse4.onrender.com/user",
        registerUserData
      );
      toast.promise(
        response,
        {
          loading: "Loading...",
          success:"Registered User",
          error: "Error while registration !!",
        },
        { success: { duration: 2000 } },
      );
      return response;
    } catch (error) {
        console.log(error)
    }
  }
);

export const emailVerificationProcess = createAsyncThunk(
  "EMAIL/VERIFICATION/PROCESS",
  async (verificationData: { id: string; token: string }) => {
    try {
      const { id, token } = verificationData;
      const response = axios.get(
        `https://node-js-wse4.onrender.com/user/email/verification?token=${token}&userId=${id}`
      );
      toast.promise(
        response,
        {
          loading: "Loading...",
          success: "Email Verified!!",
          error: "Error!!",
        }
      );
      return response;
    } catch (error) {
        console.log(error)
    }
  }
);

export default registerSlice.reducer;
