import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: '',
    last_name: '',
    identification_type: '',
    identification_number: '',
    phone_number: '',
    student_id: '',
}

export const relativesSlice = createSlice({
    name: 'relatives',
    initialState,
    reducers: {
        // General
        setRelatives: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.last_name = action.payload.last_name
            state.identification_type = action.payload.identification_type
            state.identification_number = action.payload.identification_number
            state.phone_number = action.payload.phone_number
            state.student_id = action.payload.student_id
        },
        unsetRelatives: (state) => {
            state.id = ''
            state.name = ''
            state.last_name = ''
            state.identification_type = ''
            state.identification_number = ''
            state.phone_number = ''
            state.student_id = ''
        },
        updateRelativeName: (state, action) => {
            state.name = action.payload.name
        },
        updateRelativeLastName: (state, action) => {
            state.last_name = action.payload.last_name
        },
        updateRelativeIdentificationType: (state, action) => {
            state.identification_type = action.payload.identification_type
        },
        updateRelativeIdentificationNumber: (state, action) => {
            state.identification_number = action.payload.identification_number
        },
        updateRelativePhoneNumber: (state, action) => {
            state.phone_number = action.payload.phone_number
        },
        updateRelativeStudentId: (state, action) => {
            state.student_id = action.payload.student_id
        }
    }
})

export const { 
    setRelatives, 
    unsetRelatives, 
    updateRelativeName, 
    updateRelativeLastName, 
    updateRelativeIdentificationType, 
    updateRelativeIdentificationNumber, 
    updateRelativePhoneNumber,
    updateRelativeStudentId
} = relativesSlice.actions

export default relativesSlice.reducer