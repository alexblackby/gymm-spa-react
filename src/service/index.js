import api from '../api'
import auth from '../auth/load'

export function init() {
    auth.load().then(function() {
        api.init()
        api.getUserTrainsHistory()
        api.getAllTrainersList()
    })
}