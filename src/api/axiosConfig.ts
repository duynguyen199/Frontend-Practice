import axios, { Axios } from "axios"

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    timeout: 10000
})

instanceAxios.interceptors.response.use(
    (response)=>{
        return response.data
    },
    ()=>{}
)
export default instanceAxios