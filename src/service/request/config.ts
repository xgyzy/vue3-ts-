let BASE_URL = ''
const TIME_OUT = 1000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:7878/api/hy66/'
}
export { BASE_URL, TIME_OUT }
