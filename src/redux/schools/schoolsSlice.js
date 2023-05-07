import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: '',
    address: '',
    has_morning_hours: false,
    has_afternoon_hours: false,
}

export const schoolsSlice = createSlice({
    name: 'schools',
    initialState,
    reducers: {
        // General
        setSchools: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.address = action.payload.address
            state.has_morning_hours = action.payload.has_morning_hours
            state.has_afternoon_hours = action.payload.has_afternoon_hours
        },
        unsetSchools: (state) => {
            state.id = ''
            state.name = ''
            state.address = ''
            state.has_morning_hours = false
            state.has_afternoon_hours = false
        },
        updateSchoolName: (state, action) => {
            state.name = action.payload
        },
        updateSchoolAddress: (state, action) => {
            state.address = action.payload
        },
        toggleMorningHours: (state) => {
            state.has_morning_hours = !state.has_morning_hours
        },
        toggleAfternoonHours: (state) => {
            state.has_afternoon_hours = !state.has_afternoon_hours
        },
    }
})

export const { setSchools, unsetSchools, updateSchoolName, updateSchoolAddress, toggleMorningHours, toggleAfternoonHours} = schoolsSlice.actions

export default schoolsSlice.reducer