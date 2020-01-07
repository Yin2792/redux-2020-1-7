import { Add_USER, Delete_User, Edit_User } from './actionTypes'

export const addUser = addvalue => ({
    type: Add_USER,
    payload: addvalue
})

export const deleteUser = id => ({
    type: Delete_User,
    payload: id
})

export const editUser = editValue => ({
    type: Edit_User,
    payload: editValue
})