import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from '../utils/userReduxSlice';
import moviesSliceReducer from '../utils/moviesReduxSlice';
import gptSliceReducer from '../utils/gptreduxslice';

const appReduxStore = configureStore(
    {
        reducer: {
            user: userSliceReducer,
            movies: moviesSliceReducer,
            gpt: gptSliceReducer,
        }
    }
);

export default appReduxStore;