import { createSlice } from "@reduxjs/toolkit";

const moviesReduxSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        // trailer:null,
        // popular:null,
        // topRated:null,
        // upComing:null,
        // movieInfo:null,
        // similarMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
    }
})

export default moviesReduxSlice.reducer;
export const {addNowPlayingMovies}=moviesReduxSlice.actions;