import Express from 'express'
import { responseClient } from '../utils'
const router = Express.Router()
const path = require('path')
const fs = require('fs')
const multipart = require('connect-multiparty')

const multipartMiddleware = multipart()

router.post('/fileData', multipartMiddleware, (req, res) => {
  const { name, uid } = req.body
  const file = req.files
  const reader = fs.createReadStream(file.file.path)
  const stream = fs.createWriteStream(path.join('static', `${uid}${name}`))
  reader.pipe(stream)
  stream.on('finish', function() {
    const data = {}
    responseClient(res, 200, 200, '请求成功', data)
  })
})

module.exports = router