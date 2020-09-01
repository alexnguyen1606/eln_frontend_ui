import React from 'react'
import * as actions from './../actions/Action';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function Logout() {
    const dispatch = useDispatch();
    dispatch(actions.logout({}))
    const logout = () => {
        dispatch(actions.logout({}))
        return <Redirect to="/login"></Redirect>
    }

    return (
        <Redirect to="/login"></Redirect>
    )
}

export default Logout
