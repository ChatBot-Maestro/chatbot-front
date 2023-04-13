import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    tutorship_id: '',
    schedule_date: '',
}

export const tutorshipSessionsSlice = createSlice({
    name: 'tutorshipSessions',
    initialState,
    reducers: {
        // General
        setTutorshipSessions: (state, action) => {
            state.id = action.payload.id
            state.tutorship_id = action.payload.tutorship_id
            state.schedule_date = action.payload.schedule_date
        },
        unsetTutorshipSessions: (state) => {
            state.id = ''
            state.tutorship_id = ''
            state.schedule_date = ''
        }
    }
})

export const { setTutorshipSessions, unsetTutorshipSessions } = tutorshipSessionsSlice.actions

export default tutorshipSessionsSlice.reducer