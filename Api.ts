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
      prepareHeaders: (headers, { endpoint }) => {
        if (token && !['loginUser', 'createUser', 'getSchools'].includes(endpoint)) {
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
    predefinedName: builder.mutation({
      query: () => ({
        url: '/accounts/generate_name/',
        method: 'POST',

      }),
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: '/post/create/',
        method: 'POST',
        body: data,
      }),
    }),
    getPost: builder.mutation({
      query: () => ({
        url: '/post/',
        method: 'GET',

      }),
    }),
    getPostBySchool: builder.mutation({
      query: () => ({
        url: '/post/school/',
        method: 'GET',

      }),
    }),
    downvote: builder.mutation({
      query: (data) => ({
        url: `/post/${data.id}/upvote/`,
        method: 'POST',

      }),
    }),
    upvote: builder.mutation({
      query: (data) => ({
        url: `/post/${data.id}/downvote/`,
        method: 'POST',

      }),
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: `/post/${data.id}/comments/add`,
        method: 'POST',
        body: data.content
      }),
    }),
    replyComment: builder.mutation({
      query: (data) => ({
        url: `/post/${data.id}/comments/${data.commentId}/reply`,
        method: 'POST',
        body: data.content
      }),
    }),
    viewComment: builder.mutation({
      query: (data) => ({
        url: `/post/${data.id}/comments/`,
        method: 'GET',
      }),
    }),
   
  }),
});

export const { useCreateUserMutation, useGetPostBySchoolMutation, useDownvoteMutation, useUpvoteMutation,
  useAddCommentMutation, useReplyCommentMutation, useViewCommentMutation,
  useGetPostMutation, useCreatePostMutation, useLoginUserMutation, useGetUserDetailMutation, useGetSchoolsMutation, useUpdateUserDetailsMutation, usePredefinedNameMutation } = Api;
