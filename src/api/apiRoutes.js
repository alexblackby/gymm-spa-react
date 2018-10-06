let apiRoutes = {}

apiRoutes.hostname = '//' + window.location.hostname

apiRoutes.routes = {
  trainers: '/api/trainers',
  userTrain: '/api/users/%userId%/trains/%trainId%',
  userTrains: '/api/users/%userId%/trains',
  userTrainer: '/api/trains/%trainId%/trainers/%trainerId%',
  getAuthData: '/auth/current-user',
  loginPage: '/login',
}

apiRoutes.path = function (routePattern, params) {
  let routeWithParams = routePattern
  for(let paramName in params) {
    routeWithParams = routeWithParams.replace('%'+paramName+'%',params[paramName])
  }
  return apiRoutes.hostname + routeWithParams
}


export default apiRoutes
