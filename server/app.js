const Koa = require('koa')
const KoaRouter = require('koa-router')
const Log = require('./utils/log.js')
const config = require('./config/config.js')
require('./plugins/beforeRestful.js')
let app = new Koa()
// let router = KoaRouter()

// app.use(router.routes())

app.listen(config.serverPort, () => {
    Log.info(`app is running at port ${config.serverPort}`)
})
