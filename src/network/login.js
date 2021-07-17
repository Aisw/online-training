import {logRequest} from "./logRequest";
//http://119.29.199.37
export function login(username,password){
    return logRequest({
        method: 'POST',
        url: 'http://119.29.199.37:8888/login',
        params:{
            username,
            password
        }
    })
}

export function logout(){
    return logRequest({
        method: 'GET',
        url: 'http://119.29.199.37:8888/logout',
    })
}