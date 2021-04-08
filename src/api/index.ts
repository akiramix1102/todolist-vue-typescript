import axios from 'axios'

const config = {
    baseURL: 'https://5ece614261c8480016701483.mockapi.io',
    headers: { Accept: 'application/json' }
}

const request = axios.create(config)
request.interceptors.request.use(request => {
    return request
})
request.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.error(error)
        return error
    }
)
export default request
