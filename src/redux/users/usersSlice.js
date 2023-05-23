import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    identification_type: '',
    identification_number: '',
    phone_number: '',
    is_active: false,
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
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            state.identification_type = action.payload.identification_type
            state.identification_number = action.payload.identification_number
            state.phone_number = action.payload.phone_number
            state.is_active = action.payload.is_active
            state.token = action.payload.token
        },
        unsetUser: (state) => {
            state.id = ''
            state.email = ''
            state.first_email = ''
            state.last_name = ''
            state.identification_type = ''
            state.identification_number = ''
            state.phone_number = ''
            state.is_active = false
            state.token = ''
        }
    }
})

export const { setUser, unsetUser } = usersSlice.actions

export default usersSlice.reducer