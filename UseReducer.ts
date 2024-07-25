
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createUser, mineCXA, loginUser, amountMined, forgotPassword } from "./UserAction";
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
    token: string,
    schools: School[];


}

const initialState: userState = {
    username: '',
    email: '',
    password: '',
    isSignedIn: false,
    userId: '',
    totalSchools: 0,
    token: '',
    schools: []


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
            state.token = '';
            state.username = '';
            state.email = '';
            state.userId = '';
            state.isSignedIn = false;

        }
    },
    extraReducers: builder => {

        builder.addMatcher(Api.endpoints.forgotPassword.matchFulfilled, (state, action) => {
            console.log(action, 'fulfilled')
        })
        builder.addMatcher(Api.endpoints.resetPassword.matchFulfilled, (state, action) => {
            console.log(action, 'Reset')
        })
            .addMatcher(Api.endpoints.createUser.matchFulfilled, (state, action) => {
                console.log(action.payload)
                state.email = action.payload.data.email;
                state.userId = action.payload.data.user;
                state.username = action.meta.arg.username;
            })

            .addMatcher(Api.endpoints.loginUser.matchFulfilled, (state, action) => {
                // state.password = action.meta.arg.password;
                state.token = action.payload.data.token;
                state.username = action.payload.data.username;
                state.email = action.payload.data.email;
                state.userId = action.payload.data.userId
                state.isSignedIn = true;
            })
            .addMatcher(Api.endpoints.mineCXA.matchFulfilled, (state, action) => {
                console.log(state.totalSchools, 'mine 00')

            })
            .addMatcher(Api.endpoints.getSchools.matchFulfilled, (state, action) => {
                console.log(action, 2)
                state.totalSchools = action.payload.length;
                state.schools = action.payload.map((school: any) => ({
                    id: school.id,
                    name: school.name,
                    short_name: school.short_name
                }));

            });

    }

})
export const { logout } = userSlice.actions
export default userSlice.reducer