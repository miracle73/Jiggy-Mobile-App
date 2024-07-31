import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UseReducer";
import { persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";
import thunk from 'redux-thunk'
import storage from '@react-native-async-storage/async-storage'
import { Api } from "./Api";


const persistConfig = {
    key: 'root',
    storage, 
  
   };
   
   const persistedReducer = persistReducer(persistConfig, userSlice.reducer);
    // storage.clear()
   export const store = configureStore({
    reducer: {
       user: persistedReducer,
       [Api.reducerPath]: Api.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(Api.middleware),

   });
   
   export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch