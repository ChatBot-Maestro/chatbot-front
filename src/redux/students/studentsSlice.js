import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: '',
    last_name: '',
    identification_type: '',
    identification_number: '',
    phone_number: '',
    grade: '',
    sex: '',
    age: '',
    working_hours: '',
    school_id: '',
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        // General
        setStudents: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.last_name = action.payload.last_name
            state.identification_type = action.payload.identification_type
            state.identification_number = action.payload.identification_number
            state.phone_number = action.payload.phone_number
            state.grade = action.payload.grade
            state.sex = action.payload.sex
            state.age = action.payload.age
            state.working_hours = action.payload.working_hours
            state.school_id = action.payload.school_id
        },
        unsetStudents: (state) => {
            state.id = ''
            state.name = ''
            state.last_name = ''
            state.identification_type = ''
            state.identification_number = ''
            state.phone_number = ''
            state.grade = ''
            state.sex = ''
            state.age = ''
            state.working_hours = ''
        },
         // Updating specific properties
        updateStudentGrade: (state, action) => {
            state.grade = action.payload;
        },
        updateStudentWorkingHours: (state, action) => {
            state.working_hours = action.payload;
        },
        updateStudentPhoneNumber: (state, action) => {
            state.phone_number = action.payload;
        },
      
        // Clearing specific properties
        clearStudentGrade: (state) => {
            state.grade = '';
        },
        clearStudentWorkingHours: (state) => {
            state.working_hours = '';
        },
        clearStudentPhoneNumber: (state) => {
            state.phone_number = '';
        }                 
    }
})

export const {
    setStudents,
    unsetStudents,
    updateStudentGrade,
    updateStudentWorkingHours,
    updateStudentPhoneNumber,
    clearStudentGrade,
    clearStudentWorkingHours,
    clearStudentPhoneNumber
  } = studentsSlice.actions;
  
export default studentsSlice.reducer