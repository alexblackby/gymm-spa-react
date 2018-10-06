import {store} from '../store'

let auth = {}

auth.getToken = function () {
  return store.getState().authData.token
}

auth.getUserId = function () {
  return store.getState().authData.userId
}

auth.getUserEmail = function () {
  return store.getState().authData.userEmail
}

auth.getAuthHeader = function () {
  return "Bearer " + auth.getToken()
}

export default auth
