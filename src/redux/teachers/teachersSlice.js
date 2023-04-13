import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    email: '',
    name: '',
    last_name: '',
    identification_type: '',
    identification_number: '',
    phone_number: '',
    is_active: false,
    is_staff: false,
    is_teacher: false,
    is_school_manager: false,
    user_id: '',
    teacherSubject: {
        teacher_id: '',
        subject_id: '',
    },
    schedule: {
        id: '',
        teacher_id: '',
        day: '',
        start_hour: '',
        end_hour: '',
        type: '',
    }
}

export const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        // General
        setTeacher: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.name = action.payload.name
            state.last_name = action.payload.last_name
            state.identification_type = action.payload.identification_type
            state.identification_number = action.payload.identification_number
            state.phone_number = action.payload.phone_number
            state.is_active = action.payload.is_active
            state.is_staff = action.payload.is_staff
            state.is_teacher = action.payload.is_teacher
            state.is_school_manager = action.payload.is_school_manager
            state.token = action.payload.token
            state.user_id = action.payload.user_id
            state.teacherSubject = action.payload.teacherSubject
            state.schedule = action.payload.schedule
        },
        unsetTeacher: (state) => {
            state.id = ''
            state.email = ''
            state.name = ''
            state.last_name = ''
            state.identification_type = ''
            state.identification_number = ''
            state.phone_number = ''
            state.is_active = false
            state.is_staff = false
            state.is_teacher = false
            state.is_school_manager = false
            state.token = ''
            state.user_id = ''
            state.teacherSubject = {}
            state.schedule = {}
        },
        // Update teacher
        updateTeacher: (state, action) => {
            state.id = action.payload.id ?? state.id
            state.email = action.payload.email ?? state.email
            state.name = action.payload.name ?? state.name
            state.last_name = action.payload.last_name ?? state.last_name
            state.identification_type = action.payload.identification_type ?? state.identification_type
            state.identification_number = action.payload.identification_number ?? state.identification_number
            state.phone_number = action.payload.phone_number ?? state.phone_number
            state.is_active = action.payload.is_active ?? state.is_active
            state.is_staff = action.payload.is_staff ?? state.is_staff
            state.is_teacher = action.payload.is_teacher ?? state.is_teacher
            state.is_school_manager = action.payload.is_school_manager ?? state.is_school_manager
            state.user_id = action.payload.user_id ?? state.user_id
            state.token = action.payload.token ?? state.token
        },
        // Add teacher subject
        addTeacherSubject: (state, action) => {
            state.teacherSubject = action.payload.teacherSubject
        },
        // Remove teacher subject
        removeTeacherSubject: (state) => {
            state.teacherSubject = {}
        },
        // Add schedule
        addSchedule: (state, action) => {
            state.schedule = action.payload.schedule
        },
        // Update schedule
        updateSchedule: (state, action) => {
            state.schedule = {
                ...state.schedule,
                ...action.payload.schedule,
            }
        },
        removeSchedule: (state) => {
            state.schedule = {}
        },
        // Activate/deactivate teacher
        activateTeacher: (state) => {
            state.is_active = true
        },
        deactivateTeacher: (state) => {
            state.is_active = false
        },

    }
})

export const { setTeacher, unsetTeacher, updateSchedule, removeSchedule, activateTeacher, deactivateTeacher } = teachersSlice.actions

export default teachersSlice.reducer