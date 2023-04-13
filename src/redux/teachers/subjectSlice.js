import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: '',
}

export const subjectSlice = createSlice({
    name: 'subject',
    initialState,
    reducers: {
        // General
        setSubject: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
        },
        unsetSubject: (state) => {
            state.id = ''
            state.name = ''
        },
        // Additional reducers
        updateSubjectName: (state, action) => {
            state.name = action.payload.name
        },
        setSubjectId: (state, action) => {
         state.id = action.payload.id
        }
    }
})

export const { setSubject, unsetSubject, updateSubjectName, setSubjectId } = subjectSlice.actions

export default subjectSlice.reducer