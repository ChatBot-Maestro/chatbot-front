import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    status: '',
    request_type: '',
    creation_date: '',
    contact_times: '',
    student_id: '',
    teacher_id: '',
    subject_id: '',
}

export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        // General
        setRequest: (state, action) => {
            state.id = action.payload.id
            state.status = action.payload.status
            state.request_type = action.payload.request_type
            state.creation_date = action.payload.creation_date
            state.contact_times = action.payload.contact_times
            state.student_id = action.payload.student_id
            state.teacher_id = action.payload.teacher_id
            state.subject_id = action.payload.subject_id
        },
        unsetRequest: (state) => {
            state.id = ''
            state.status = ''
            state.request_type = ''
            state.creation_date = ''
            state.contact_times = ''
            state.student_id = ''
            state.teacher_id = ''
            state.subject_id = ''
        },
        // Update request status
        updateRequestStatus: (state, action) => {
            state.status = action.payload.status
        },
        // Update request contact times
        updateRequestContactTimes: (state, action) => {
            state.contact_times = action.payload.contact_times
        },
        // Set student ID for request
        setRequestStudentID: (state, action) => {
            state.student_id = action.payload.student_id
        },
        // Set teacher ID for request
        setRequestTeacherID: (state, action) => {
            state.teacher_id = action.payload.teacher_id
        },
        // Set subject ID for request
        setRequestSubjectID: (state, action) => {
            state.subject_id = action.payload.subject_id
        },
    }
})

export const {
    setRequest,
    unsetRequest,
    updateRequestStatus,
    updateRequestContactTimes,
    setRequestStudentID,
    setRequestTeacherID,
    setRequestSubjectID
} = requestSlice.actions

export default requestSlice.reducer