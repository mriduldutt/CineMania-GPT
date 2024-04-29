import { createSlice } from "@reduxjs/toolkit";

const moviesReduxSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popular:null,
        topRated:null,
        upComing:null,
        // movieInfo:null,
        // similarMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popular=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRated=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upComing=action.payload;
        }

    }
})

export default moviesReduxSlice.reducer;
export const 
{addNowPlayingMovies,
addTrailerVideo,
addPopularMovies,
addTopRatedMovies,
addUpcomingMovies
}=moviesReduxSlice.actions;