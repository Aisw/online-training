import {request} from "./request";

export function getBanners(){
    return request({
        method: 'GET',
        url: 'http://127.0.0.1:8888/and/swiper'
    })
}