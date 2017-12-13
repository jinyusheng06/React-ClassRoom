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
//中间件
app.use(function sleep(req,res,next) {
    setTimeout(next,2000)
})
let sliders = require('./mock/sliders')
app.get('/api/sliders',function (req,res) {
    res.json(sliders)
})
let lessons = require('./mock/lessons')//{hasMore,list}
app.get('/api/lessons',function (req,res) {
    let {offset=0,limit=5} = req.query
    offset = isNaN(offset)?0:parseInt(offset)
    limit = isNaN(limit)?0:parseInt(limit)
    let newLessons = JSON.parse(JSON.stringify(lessons))
    //如果下一页的起始索引已经大于等于总条数了 则认为已经分页完毕 后面已没有数据了
    newLessons.hasMore = limit+offset<newLessons.list.length//20
    //提取指定页的数据
    newLessons.list = newLessons.list.slice(offset,offset+limit)//offset0 0-4
    for(let i = 0;i<newLessons.list.length;i++){
        let lesson = newLessons.list[i]
        lesson.title = `${offset+i+1}-${lesson.title}`
    }
    res.json(newLessons)
})
app.listen(3000)