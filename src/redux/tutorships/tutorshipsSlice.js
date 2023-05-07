import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    topic: '',
    details: '',
    grade: '',
    teacher_id: '',
    subject_id: '',
}

export const tutorshipSlice = createSlice({
    name: 'tutorship',
    initialState,
    reducers: {
        // General
        setTutorship: (state, action) => {
            state.id = action.payload.id
            state.topic = action.payload.topic
            state.details = action.payload.details
            state.grade = action.payload.grade
            state.teacher_id = action.payload.teacher_id
            state.subject_id = action.payload.subject_id
        },
        unsetTutorship: (state) => {
            state.id = ''
            state.topic = ''
            state.details = ''
            state.grade = ''
            state.teacher_id = ''
            state.subject_id = ''
        },
        // Additional reducers
        updateTutorshipTopic: (state, action) => {
            state.topic = action.payload.topic
        },
        updateTutorshipDetails: (state, action) => {
            state.details = action.payload.details
        },
        updateTutorshipGrade: (state, action) => {
            state.grade = action.payload.grade
        },
        updateTutorshipTeacherId: (state, action) => {
            state.teacher_id = action.payload.teacher_id
        },
        updateTutorshipSubjectId: (state, action) => {
            state.subject_id = action.payload.subject_id
        },
        clearTutorshipDetails: (state) => {
            state.details = ''
        }
    }
})

export const { setTutorship, unsetTutorship, updateTutorshipTopic, updateTutorshipDetails, updateTutorshipGrade, updateTutorshipTeacherId, updateTutorshipSubjectId, clearTutorshipDetails } = tutorshipSlice.actions

export default tutorshipSlice.reducer