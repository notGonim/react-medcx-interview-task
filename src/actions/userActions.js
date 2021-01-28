

export const LoginFn = ({ displayName, email, photoURL }) => (dispatch) => {

    dispatch({
        type: "LOGIN",
        payLoad: {
            user: { displayName, email, photoURL }
        }
    })
}

export const Logout = () => (dispatch) => {

    dispatch({
        type: 'LOGOUT',
        payLoad: {
            user: null
        }
    })

}