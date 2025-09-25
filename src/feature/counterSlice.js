import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        Increment: (state) => { state.count += 1 },
        Decrement: (state) => { state.count -= 1 },
        Zero: (state) => { state.count = 0 },
    }
});
export const { Increment, Decrement, Zero } = counterSlice.actions;
export default counterSlice.reducer;