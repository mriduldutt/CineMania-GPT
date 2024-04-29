import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from '../utils/userReduxSlice';
import moviesSliceReducer from '../utils/moviesReduxSlice';

const appReduxStore = configureStore(
    {
        reducer: {
            user: userSliceReducer,
            movies: moviesSliceReducer,
        }
    }
);

export default appReduxStore;