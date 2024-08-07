
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Api } from "./Api";
import storage from '@react-native-async-storage/async-storage'

interface School {

    id: number;
    name: string;
    short_name: string;

}

export interface userState {
    username: string
    email: string,
    password: string,
    isSignedIn: boolean,
    userId: string,
    totalSchools: number,
    accessToken: string,
    refreshToken: string,
    schools: School[],
    first_name: string,
    last_name: string,
    country: string,
    pred_name: string,
    about: string,
    gender: string,
    grad_year: number,


}

const initialState: userState = {
    username: '',
    email: '',
    password: '',
    isSignedIn: false,
    userId: '',
    totalSchools: 0,
    accessToken: '',
    refreshToken: '',
    schools: [],
    first_name: '',
    last_name: '',
    country: '',
    pred_name: '',
    about: '',
    gender: '',
    grad_year: 0,


}

type ActionType = {
    type: string,
    payload: any
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        logout: (state) => {
            state.accessToken = '';
            state.refreshToken = '';
            state.username = '';
            state.email = '';
            state.userId = '';
            state.isSignedIn = false;

        }
    },
    extraReducers: builder => {

        builder.addMatcher(Api.endpoints.updateUserDetails.matchFulfilled, (state, action) => {
            state.about = action.payload.about,
                state.country = action.payload.country,
                state.gender = action.payload.gender,
                state.grad_year = action.payload.grad_year,
                state.pred_name = action.payload.pred_name
            console.log(action.payload)

        })
        builder.addMatcher(Api.endpoints.predefinedName.matchFulfilled, (state, action) => {
            console.log(action.payload)
        })
            .addMatcher(Api.endpoints.createUser.matchFulfilled, (state, action) => {
                console.log(action.payload)

            })

            .addMatcher(Api.endpoints.loginUser.matchFulfilled, (state, action) => {

                state.accessToken = action.payload.access_token,
                    state.refreshToken = action.payload.refresh_token
                console.log(state.accessToken)
                console.log(state.refreshToken)
                state.isSignedIn = true
            })
            .addMatcher(Api.endpoints.getUserDetail.matchFulfilled, (state, action) => {
                state.email = action.payload.email,
                    state.userId = action.payload.id,
                    state.first_name = action.payload.first_name,
                    state.last_name = action.payload.last_name,
                    state.country = action.payload.country,
                    state.pred_name = action.payload.pred_name

            })
            .addMatcher(Api.endpoints.getSchools.matchFulfilled, (state, action) => {
                console.log(action, 2)
                state.totalSchools = action.payload.length;
                state.schools = action.payload.map((school: any) => ({
                    id: school.id,
                    name: school.name,
                    short_name: school.short_name
                }));

            })
            .addMatcher(Api.endpoints.createPost.matchFulfilled, (state, action) => {
                console.log(action.payload)

            })
            .addMatcher(Api.endpoints.getPost.matchFulfilled, (state, action) => {
                console.log(action.payload)

            })
            .addMatcher(Api.endpoints.upvote.matchFulfilled, (state, action) => {
                console.log(action.payload)

            })
            .addMatcher(Api.endpoints.downvote.matchFulfilled, (state, action) => {
                console.log(action.payload)

            })
            .addMatcher(Api.endpoints.replyComment.matchFulfilled, (state, action) => {
                console.log(action.payload)

            })
            .addMatcher(Api.endpoints.viewComment.matchFulfilled, (state, action) => {
                console.log(action.payload)

            })
            .addMatcher(Api.endpoints.addComment.matchFulfilled, (state, action) => {
                console.log(action.payload)

            })
    }

})
export const { logout } = userSlice.actions
export default userSlice.reducer