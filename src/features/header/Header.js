import React from 'react'
import './header.scss'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { Logout } from '../../actions/userActions'

export const Header = () => {

    const { ...data } = useSelector(state => state.user)
    const { displayName, email, photoURL } = data.user
    const dispatch = useDispatch()

    const signout = () => {
        auth.signOut().then(() => {
            dispatch(Logout())
        })
    }



    return (
        <div className="header">
            <div className="header_left">
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
            </div>
            <div className="header_right">
                <Avatar onClick={signout} src={photoURL} className="avatar" > {email[0]}</Avatar>
            </div>


        </div>
    )
}

