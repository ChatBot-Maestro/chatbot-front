import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tutorship_id: '',
    tutorship_session_id: '',
    student_id: '',
    attendance: false
}

export const tutorshipAssistsSlice = createSlice({
    name: 'tutorshipAssists',
    initialState,
    reducers: {
        // General
        setTutorshipAssists: (state, action) => {
            state.tutorship_id = action.payload.tutorship_id
            state.tutorship_session_id = action.payload.tutorship_session_id
            state.student_id = action.payload.student_id
            state.attendance = action.payload.attendance
        },
        unsetTutorshipAssists: (state) => {
            state.tutorship_id = ''
            state.tutorship_session_id = ''
            state.student_id = ''
            state.attendance = false
        },
        updateAttendance: (state, action) => {
            state.attendance = action.payload.attendance
        },
        updateTutorshipSession: (state, action) => {
            state.tutorship_session_id = action.payload.tutorship_session_id
        }
    }
})

export const {
    setTutorshipAssists,
    unsetTutorshipAssists,
    updateAttendance,
    updateTutorshipSession
} = tutorshipAssistsSlice.actions

export default tutorshipAssistsSlice.reducer