import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserData {
    username: string;
    email: string;
    password: string;
   }

   interface LoginData {
    email: string;
    password: string;
   }
   interface mineCXA {
    email: string;
   }

   interface amountMined {
    userId: string;
   }
   
   interface forgotPassword {
    email: string;
   }
 
   export const createUser = createAsyncThunk<void, UserData, {}>(
    "createUser",
    async (userData: UserData) => {
       try {
         const response = await axios.post('https://coxuna-api-5iaw.onrender.com/api/v1/auth/signup', userData);
         return response.data
       } catch (err) {
         return "No user was created"
       }
    }
   );

   export const loginUser = createAsyncThunk<void, LoginData, {}>(
    "loginUser",
    async (userData: LoginData) => {
       try {
         const response = await axios.post('https://coxuna-api-5iaw.onrender.com/api/v1/auth/login', userData);
         console.log(response.data);
         return response.data
       } catch (err) {
         console.log(err);
         return "User wasn't logged in"
       }
    }
   );

   export const mineCXA = createAsyncThunk<void, mineCXA, {}>(
    "mineCXA",
    async (data: mineCXA) => {
       try {
         const response = await axios.post('https://coxuna-api-5iaw.onrender.com/api/v1/mine', data);
         console.log(response.data);
         return response.data
       } catch (err) {
         console.log(err, 1);
         return "Mining was unsuccessful ";
       }
    }
   );

   export const amountMined = createAsyncThunk<void, amountMined, {}>(
    "amountMined",
    async (data: amountMined) => {
       try {
        console.log(data.userId)
         const response = await axios.get(`https://coxuna-api-5iaw.onrender.com/api/v1/mine/${data.userId}`);
         console.log(response.data.totalMined);
         return response.data.totalMined
       } catch (err) {
         console.log(err);
       }
    }
   );
   
   export const forgotPassword = createAsyncThunk<void, forgotPassword, {}>(
    "forgotPassword",
    async (data: forgotPassword) => {
       try {
         const response = await axios.post('https://coxuna-api-5iaw.onrender.com/api/v1/auth/forgot-password', data);
         console.log(response.data);
       } catch (err) {
         console.log(err);
       }
    }
   );

