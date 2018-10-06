const utils = {
  timeInSeconds() {
    return Math.floor(Date.now() / 1000)
  },
  cloneObject(object) {
    return JSON.parse(JSON.stringify(object))
  }
}

export default utils
