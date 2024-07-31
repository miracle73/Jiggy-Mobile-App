// src/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './Store';

export const Api = createApi({
  reducerPath: 'api',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://jiggybackend.com.ng' }),
  baseQuery: async (args, api, extraOptions) => {  
    const state = api.getState() as RootState;   
    const token = state.user.accessToken; 

    const baseQuery = fetchBaseQuery({  
      baseUrl: 'https://jiggybackend.com.ng',  
      prepareHeaders: (headers) => {  
        if (token) {  
          headers.set('Authorization', `Bearer ${token}`);  
        }  
        return headers;  
      },  
    });  

    return baseQuery(args, api, extraOptions);  
  }, 
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/accounts/register/',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/accounts/oauth/token/',
        method: 'POST',
        body: userData,
      }),
    }),
    getUserDetail: builder.mutation({
      query: () => ({
        url: '/accounts/user_detail/',
        method: 'GET',
      
      }),
    }),
    getSchools: builder.mutation({
      query: () => ({
        url: `/waitlist/student/`,
        method: 'GET',
       
      })
    }),
    updateUserDetails: builder.mutation({
      query: (data) => ({
        url: '/accounts/update_user/',
        method: 'PUT',
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
        query: (data) => ({
          url: '/auth/reset-password',
          method: 'POST',
          body: data,
        }),
      }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation, useGetUserDetailMutation, useGetSchoolsMutation, useUpdateUserDetailsMutation , useResetPasswordMutation } = Api;
