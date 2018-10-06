import axios from 'axios'

let apiQueue = {}


apiQueue.queue = []
apiQueue.isProcessing = false
apiQueue.interval = 100
apiQueue.authHeader = null


apiQueue.start = () => {
  apiQueue.intervalTimer = setInterval(apiQueue.process, apiQueue.interval)
}

apiQueue.setAuthHeader = (header) => {
  apiQueue.authHeader = header
}


apiQueue.add = (url, method, data = null) => {
  return new Promise(function (resolve, reject) {
    const queueItem = {
      url,
      method,
      data,
      resolve,
      reject
    }
    apiQueue.queue.push(queueItem)
  })
}


apiQueue.process = () => {
  if (apiQueue.isProcessing) {
    return
  }

  let queueItem = apiQueue.shift()
  if (queueItem) {
    apiQueue.isProcessing = true
  } else {
    return
  }

  let headers = {}
  if(apiQueue.authHeader) {
    headers.Authorization = apiQueue.authHeader
  }

  axios({
    method: queueItem.method,
    url: queueItem.url,
    data: queueItem.data,
    headers
  })
    .then(response => {
      apiQueue.isProcessing = false
      queueItem.resolve(response.data)
    })
    .catch(error => {
      apiQueue.isProcessing = false
      queueItem.reject(error)
    })
}


apiQueue.shift = () => {
  if (apiQueue.queue.length === 0) return false
  let queueItem = apiQueue.queue.shift()

  // try to find similar idempotent requests in the queue (PUT/DELETE and same URL)
  // if find - execute only the latest one
  if (queueItem.method.toLowerCase() === 'put' || queueItem.method.toLowerCase() === 'delete') {
    for (let i = 0; i < apiQueue.queue.length; i++) {
      const nextItem = apiQueue.queue[i]
      if (
        (nextItem.method.toLowerCase() === 'put' || nextItem.method.toLowerCase() === 'delete')
        && nextItem.url === queueItem.url
      ) {
        queueItem = nextItem
        apiQueue.queue.splice(i, 1)
        i--
      }
    }
  }

  return queueItem
}


apiQueue.deleteProcessed = () => {
  if (apiQueue.queue.length && apiQueue.queue[0].isProcessing) {
    apiQueue.queue.shift()
  }
}


export default apiQueue
