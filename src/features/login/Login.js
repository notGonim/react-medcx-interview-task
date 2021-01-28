import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../../firebase'
import {LoginFn} from "../../actions/userActions"

import './login.scss'
export const Login = () => {

    const dispatch = useDispatch()
    const signin = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(LoginFn(
                {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }
            ))
            console.log(user.displayName)
        }).catch(err => alert(err.message))
    }






    return (
        <div className="login">
            <div className="login_container">
                <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63"
                    alt="" srcset="" />
                <Button variant="contained" color="primary" onClick={signin} >Login</Button>
            </div>
        </div>
    )
}
