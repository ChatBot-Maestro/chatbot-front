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
    token: '',
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // General
        setUser: (state, action) => {
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
        },
        unsetUser: (state) => {
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
        }
    }
})

export const { setUser, unsetUser } = usersSlice.actions

export default usersSlice.reducer