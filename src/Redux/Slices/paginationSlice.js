import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    showData: 0,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        /*  const changePage = ({ selected }) => {
             setShowData(selected)
         }; */
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        changePage: (state, action) => {
            state.showData = action.payload
        }
    },
})

export const { changePage, increment, decrement, incrementByAmount } = paginationSlice.actions;

export default paginationSlice.reducer