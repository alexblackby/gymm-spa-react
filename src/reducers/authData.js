const initState = {
    token: false,
    userId: false,
    userEmail: false
}

const authData = (state = initState, action) => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return {
                token: action.token,
                userId: action.userId,
                userEmail: action.userEmail
            }
        default:
            return state
    }
}

export default authData
