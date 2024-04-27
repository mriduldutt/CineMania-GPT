import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from '../utils/userReduxSlice';
const appReduxStore = configureStore(
    {
        reducer: {
            user: userSliceReducer,
        },
        devTools: true
        
    }
);

export default appReduxStore;