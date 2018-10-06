import apiRoutes from '../api/apiRoutes'
import {store} from '../store/'
import *  as actions from '../actions'
import axios from "axios/index"

let authLoader = {}

const checkAuthData = function (data) {
    return (
        typeof data.token !== 'undefined' &&
        typeof data.userId !== 'undefined' &&
        typeof data.userEmail !== 'undefined' &&
        data.token &&
        data.userId &&
        data.userEmail
    )
}

const processAuthData = function (data) {
    const token = data.token
    const userId = data.userId
    const userEmail = data.userEmail
    store.dispatch(actions.setAuthData({token, userId, userEmail}))
}

authLoader.load = function () {
    let url = apiRoutes.path(apiRoutes.routes.getAuthData)

    return new Promise(function (resolve, reject) {
        axios.get(url, {withCredentials: true})
            .then(response => {
                if (checkAuthData(response.data)) {
                    processAuthData(response.data)
                    resolve()
                } else {
                    authFailed()
                }
            })
            .catch(error => {
                networkError()
            })
    })
}

const authFailed = function () {
    window.location.href = apiRoutes.path(apiRoutes.routes.loginPage)
}

const networkError = function () {
    store.dispatch(actions.setApiError({hasError: true}))
}

export default authLoader
