const intialState = {
    user: null,
}


const UserReducer = (state = intialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payLoad.user
            };
      
        case "LOGOUT":
            return {
                ...state,
                user: action.payLoad.user
            };
       
        default:
            return { ...state };
    }
}

export default UserReducer;