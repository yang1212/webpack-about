import Express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import config from '../../config/index'

const port = config.apiPort
const app = new Express()

app.use(bodyParser.urlencoded({extended: false}))
//管理页面路由
app.use('/', require('./admin'))

mongoose.Promise = require('bluebird')
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/runoob`, function (err, db) {
  if (err) {
    console.log(err, "数据库连接失败")
    return
  }
  console.log('数据库连接成功')

  app.listen(port, function (err) {  // app.listen的作用
    if (err) {
      console.error('err:', err)
    } else {
      console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`)
    }
  })
})