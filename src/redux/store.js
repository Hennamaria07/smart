import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/users/authSlice';
import themeReducer from './features/theme/themeSlice';

export const store = configureStore({
    reducer: {
        userAuth: authReducer,
        mode: themeReducer,
    }
});