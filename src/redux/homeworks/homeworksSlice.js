import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tutorship_id: '',
    tutorship_session_id: '',
    student_id: '',
    attendance: false
}

export const homeworksSlice = createSlice({
    name: 'homeworks',
    initialState,
    reducers: {
        // General
        setHomeworks: (state, action) => {
            state.tutorship_id = action.payload.tutorship_id
            state.tutorship_session_id = action.payload.tutorship_session_id
            state.student_id = action.payload.student_id
            state.attendance = action.payload.attendance
        },
        unsetHomeworks: (state) => {
            state.tutorship_id = ''
            state.tutorship_session_id = ''
            state.student_id = ''
            state.attendance = false
        },
        // Reducer to mark attendance
        markAttendance: (state, action) => {
            state.attendance = action.payload.attendance;
        },

        // Reducer to set tutorship id
        setTutorshipId: (state, action) => {
            state.tutorship_id = action.payload.tutorship_id;
        },

        // Reducer to set tutorship session id
        setTutorshipSessionId: (state, action) => {
            state.tutorship_session_id = action.payload.tutorship_session_id;
        },

        // Reducer to set student id
        setStudentId: (state, action) => {
            state.student_id = action.payload.student_id;
        }
    }
})

export const { setHomeworks, unsetHomeworks, markAttendance, setTutorshipId, setTutorshipSessionId, setStudentId } = homeworksSlice.actions

export default homeworksSlice.reducer