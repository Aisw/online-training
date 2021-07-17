import {request} from "./request";

export function getProgram(){
    return request({
        method: 'GET',
        url: 'http://119.29.199.37:8888/and/pro'
    })
}

export function setScore(resId,second){
    return request({
        method: 'GET',
        url: 'http://119.29.199.37:8888/and/score',
        params: {
            resId,
            second
        }
    })
}