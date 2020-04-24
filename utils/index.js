export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const COOKIE_NAME = 'auth.session'

export const toDate = (date) => {
  if (date === undefined) return null

  const strDate = date.toString()

  const dateObject = new Date()

  dateObject.setUTCFullYear(strDate.substr(0, 4))
  dateObject.setUTCMonth(Number(strDate.substr(4, 2)) - 1)
  dateObject.setUTCDate(strDate.substr(6, 2))
  dateObject.setUTCHours(strDate.substr(8, 2))
  dateObject.setUTCMinutes(strDate.substr(10, 2))
  dateObject.setUTCSeconds(strDate.substr(12, 2))
  dateObject.setUTCMilliseconds(strDate.substr(15))

  return dateObject
}

export const debounce = (fn, wait) => {
  let timeout
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
