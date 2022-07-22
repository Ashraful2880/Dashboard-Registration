import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rider: "",
    date: "",
    riderName: "",
    riderNumber: 0,
    riderAddress: "",
    totalRunParcel: 0,
    riderNote: "",
}

export const generateDataSlice = createSlice({
    name: 'generateData',
    initialState,
    reducers: {
        generateData: (state, action) => {
            state.rider = action.payload.rider
            state.date = action.payload.date
            state.riderName = action.payload.riderName
            state.riderNumber = action.payload.riderNumber
            state.riderAddress = action.payload.riderAddress
            state.totalRunParcel = action.payload.totalRunParcel
            state.riderNote = action.payload.riderNote
        }
    },
})

export const { generateData } = generateDataSlice.actions;

export default generateDataSlice.reducer