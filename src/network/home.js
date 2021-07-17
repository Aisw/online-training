import {request} from "./request";

export function getBanners(){
    return request({
        method: 'GET',
        url: 'http://119.29.199.37:8888/and/swiper'
    })
}

export function getScroller(){
    return request({
        method: 'GET',
        url: 'http://119.29.199.37:8888/and/group'
    })
}

export function getPerson(){
    return request({
        method: 'GET',
        url: 'http://119.29.199.37:8888/user'
    })
}