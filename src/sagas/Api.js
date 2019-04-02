import { Config } from '../utilities/Config'

var axios = require('axios')

function* sendNotify(params) {
    let param = JSON.stringify(params)
    const response = yield axios.post('https://fcm.googleapis.com/fcm/send',
        param
        ,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Config.cloudMessageKey
            }
        })
    const result = yield response.status === 200 ? response.data : []
    return result
}

export const Api = {
    sendNotify
}