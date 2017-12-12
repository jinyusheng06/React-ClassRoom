let express = require('express')
let app = express()
app.use(function (req,res,next) {
    //如果在webpack里配置的代理 这些响应头都不要了
    //只允许8080访问
    res.header('Access-Control-Allow-Origin','http://localhost:8080')
    //服务器允许客户端发的方法
    res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PUT')
    //服务器允许的请求头
    res.header('Access-Control-Allow-Headers','Content-Type,Accept')
    //允许客户端把cookie发过来
    res.header('Access-Control-Allow-Credentials','true')
    //如果请求的方法是OPTIONS 那么意味着客户端只要响应头 直接结束响应即可
    if (req.method == 'OPTIONS'){
        res.end()
    }else {
        next()
    }
})
let sliders = require('./mock/sliders')
app.get('/api/sliders',function (req,res) {
    res.json(sliders)
})
app.listen(3000)