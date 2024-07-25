// src/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jiggybackend.com.ng' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
    mineCXA: builder.mutation({
      query: (data) => ({
        url: '/mine',
        method: 'POST',
        body: data,
      }),
    }),
    getSchools: builder.mutation({
      query: () => ({
        url: `/waitlist/student/`,
        method: 'GET',
       
      })
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: '/auth/forgot-password',
        method: 'POST',
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

export const { useCreateUserMutation, useLoginUserMutation, useMineCXAMutation, useGetSchoolsMutation, useForgotPasswordMutation , useResetPasswordMutation } = Api;
