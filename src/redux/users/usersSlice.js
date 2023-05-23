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
            console.log('payload', action.payload);
            state.id = action.payload.user.id
            state.email = action.payload.user.email
            state.first_name = action.payload.user.first_name
            state.last_name = action.payload.user.last_name
            state.identification_type = action.payload.user.identification_type
            state.identification_number = action.payload.user.identification_number
            state.phone_number = action.payload.user.phone_number
            state.is_active = action.payload.user.is_active
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

// Add getToken selector
export const getToken = (state) => state.users.token;

export default usersSlice.reducer