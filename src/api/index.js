import rest from '../utils/rest'
import apiQueue from '../utils/apiQueue'
import apiRoutes from './apiRoutes'
import auth from '../auth'
import {store, getters} from '../store'
import * as actions from '../actions'

let api = {}

api.init = function () {
  apiQueue.start()
  apiQueue.setAuthHeader(auth.getAuthHeader())
  rest.setAuthHeader(auth.getAuthHeader())
}

api.error = function () {
  store.dispatch( actions.setApiError({hasError:true}) )
}


api.putUserTrain = function ({train}) {
  const url = apiRoutes.path(apiRoutes.routes.userTrain, {userId: auth.getUserId(), trainId: train.id})
  const data = {createTime: train.createTime}
  apiQueue.add(url, 'PUT', data)
    .catch(api.error)
}

api.deleteUserTrain = function ({trainId}) {
  const url = apiRoutes.path(apiRoutes.routes.userTrain, {userId: auth.getUserId(), trainId: trainId})
  apiQueue.add(url, 'DELETE')
    .catch(api.error)
}

api.putUserTrainer = function ({trainId, trainer}) {
  const url = apiRoutes.path(apiRoutes.routes.userTrainer, {trainId: trainId, trainerId: trainer.id})
  apiQueue.add(url, 'PUT', trainer)
    .catch(api.error)
}

api.deleteUserTrainer = function ({trainId, trainerId}) {
  const url = apiRoutes.path(apiRoutes.routes.userTrainer, {trainId, trainerId})
  apiQueue.add(url, 'DELETE')
    .catch(api.error)
}


api.getUserTrainsHistory = function () {
  if (store.getState().trainHistory.historyIsLoading || store.getState().trainHistory.historyIsLoadedFully) {
    return
  }
  store.dispatch(actions.setTrainHistoryLoading({isLoading: true}))

  const limit = 20
  const fromTime = getters.getTrainHistoryLastCreateTime()

  let url = apiRoutes.path(apiRoutes.routes.userTrains, {userId: auth.getUserId()})
  url += '?limit=' + limit
  if (fromTime > 0) {
    url += '&fromTime=' + fromTime
  }

  rest.load(url)
    .then(responseData => {
      store.dispatch(actions.setTrainHistoryLoading({isLoading: false}))
      store.dispatch(actions.addToTrainHistory({historyItems: responseData}))
      if (responseData.length < limit) {
        store.dispatch(actions.setTrainHistoryLoadedFully())
      }
    })
    .catch(error => {
      store.dispatch(actions.setTrainHistoryLoading({isLoading: false}))
      api.error()
    })
}


api.getAllTrainersList = function () {
  const url = apiRoutes.path(apiRoutes.routes.trainers)
  rest.loadAllPages(url)
    .then(responseData => store.dispatch(actions.initAllTrainersList({allTrainers: responseData})))
    .catch(error => {
      api.error()
    })
}

export default api
