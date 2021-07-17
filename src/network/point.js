import {request} from "./request";

export function getTotal(){
    return request({
        method: 'GET',
        url: 'http://119.29.199.37:8888/and/scores'
    })
}

export function getDetail(){
    return request({
        method: 'GET',
        url: 'http://119.29.199.37:8888/and/show'
    })
}