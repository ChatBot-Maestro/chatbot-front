import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    teacher_id: '',
    day: '',
    start_hour: '',
    end_hour: '',
    type: '',
}

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        // General
        setSchedule: (state, action) => {
            state.id = action.payload.id
            state.teacher_id = action.payload.teacher_id
            state.day = action.payload.day
            state.start_hour = action.payload.start_hour
            state.end_hour = action.payload.end_hour
            state.type = action.payload.type
        },
        unsetSchedule: (state) => {
            state.id = ''
            state.teacher_id = ''
            state.day = ''
            state.start_hour = ''
            state.end_hour = ''
            state.type = ''
        },
        updateStartHour: (state, action) => {
            state.start_hour = action.payload.start_hour
        },
        updateEndHour: (state, action) => {
            state.end_hour = action.payload.end_hour
        },
        updateDay: (state, action) => {
            state.day = action.payload.day
        },
        updateType: (state, action) => {
            state.type = action.payload.type
        },
    }
})

export const { setSchedule, unsetSchedule, updateStartHour, updateEndHour, updateDay, updateType} = scheduleSlice.actions

export default scheduleSlice.reducer