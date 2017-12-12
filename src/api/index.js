//向服务器发送get请求 获取响应
//credentials 在向服务器发送请求的时候要带上cookie
const HOST = 'http://localhost:3000'
export function get(url) {
    return fetch(HOST+url,{
        method:'GET',
        credentials:'include',//向服务器发送cookie
        headers:{
            'Accept':'application/json',
        }
    }).then(res=>res.json())//把响应体转换成json
}
//url后台地址 data请求体
export function post(url,data) {
    return fetch(HOST+url,{
        method:'POST',//请求方法
        credentials:'include',
        headers:{//请求头
            'Accept':'application/json',//告诉服务器客户端需要的数据类型
        },
        body:JSON.stringify(data)//请求体
    })
}