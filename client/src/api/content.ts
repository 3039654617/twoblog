import axios from 'axios';


export const add = (content: any) => {
    return axios.post('/api/content', content).then(res => {
        return res
    })
}

export const del = (id: string) => {
    return axios.delete('/api/content/'+ id).then(res => {
        return res
    })
}

export const edit = (id: string, content: any) => {
    return axios.put('/api/content/'+ id, content).then(res => {
        return res
    })
}

export const find = (id: string) => {
    return axios.get(`api/content/${id}`).then(res => res)
}

export const findMore = (condition: {}) => {
    return axios.get('api/content', {
        params: condition
    }).then(res => res)
}
