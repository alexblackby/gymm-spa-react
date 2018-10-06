import api from '../api'
import auth from '../auth/load'

export default function initApp() {
    auth.load().then(function() {
        api.init()
        api.getUserTrainsHistory()
        api.getAllTrainersList()
    })
}