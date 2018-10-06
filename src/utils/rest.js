import axios from 'axios'

let rest = {}

rest.authHeader = null

rest.setAuthHeader = (header) => {
  rest.authHeader = header
}

rest.post = function (url, object, method='post', params = {}) {
  let headers = {}
  if(rest.authHeader) {
    headers.Authorization = rest.authHeader
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: method,
      url: url,
      data: object,
      headers
    })
  .then(function (response) {
        if (response.status !== 200) {
          let error = new Error(response.statusText)
          error.code = response.status
          console.log(error)
          reject(error)
        }
        resolve(response.data)
      })
      .catch(function (error) {
        console.log(error)
        reject(error)
      })
  })
}



rest.load = function (url, params = {}) {
  let headers = {}
  if(rest.authHeader) {
    headers.Authorization = rest.authHeader
  }
  return new Promise(function (resolve, reject) {
    axios.get(url, {params, headers})
      .then(function (response) {
        if (response.status !== 200) {
          let error = new Error(response.statusText)
          error.code = response.status
          console.log(error)
          reject(error)
        }
        resolve(response.data)
      })
      .catch(function (error) {
        console.log(error)
        reject(error)
      })
  })
}


rest.loadAllPages = function (url, params = {}) {
  params._perPage = 100
  let headers = {}
  if(rest.authHeader) {
    headers.Authorization = rest.authHeader
  }
  return new Promise(function (resolve, reject) {
    let totalCount
    let results = []

    const recursionWorker = (page) => {
      let done = (totalCount && results.length >= totalCount)

      if (done) {
        resolve(results)
        return
      }

      params._page = page

      axios.get(url, {params, headers})
        .then(function (response) {
          if (response.status !== 200) {
            let error = new Error(response.statusText)
            error.code = response.status
            console.log(error)
            reject(error)
          }
          if (response.headers['x-total-count']) {
            totalCount = parseInt(response.headers['x-total-count'])
          }
          results = results.concat(response.data)
          recursionWorker(page + 1)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    }

    recursionWorker(1)
  })
}

export default rest
