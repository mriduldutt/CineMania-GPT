import { createSlice } from "@reduxjs/toolkit";

const gptreduxslice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
    }
})


export const { toggleGPTSearchView } = gptreduxslice.actions;
export default gptreduxslice.reducer;