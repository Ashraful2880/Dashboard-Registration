import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    name: "",
    email: "",
}

export const hubUserSlice = createSlice({
    name: 'hubUser',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = hubUserSlice.actions

export default hubUserSlice.reducer