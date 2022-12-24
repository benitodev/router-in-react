import {createSlice} from '@reduxjs/toolkit'
import { UserInfo } from '../../models'
import { clearLocalStorage, persistLocalstorage } from '../../utilities/LocalStorage.utility'

export const initialState: UserInfo = {
    id: 0,
    name:'',
    email: ''
} 


export const userKey = 'user'

export const userSlice = createSlice({
    name: 'user',
    initialState: JSON.parse(localStorage.getItem('user') as string) || initialState,
    reducers: {
        createUser: (_, action) =>{
            persistLocalstorage<UserInfo>(userKey, action.payload)
            return action.payload
        },
        updateUser: (state, action) => {
            const userUpdated = {...state, ...action.payload}
            persistLocalstorage<UserInfo>(userKey, userUpdated)
            return userUpdated
        },
        resetUser: () => {
            clearLocalStorage(userKey)
            return initialState
        }
    }
}) 

export const {createUser, updateUser, resetUser} = userSlice.actions

export default userSlice.reducer