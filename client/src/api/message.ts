import axios from 'axios';



export const add = (message: any) => {
    return axios.post('/api/message', message).then(res => {
        return res
    })
}

export const find= () => {
    return axios.get('api/message').then(res => res)
}