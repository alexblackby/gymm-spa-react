const initState = false

const apiError = (state = initState, action) => {
    switch (action.type) {
        case 'SET_API_ERROR':
            return action.hasError
        default:
            return state
    }
}

export default apiError
