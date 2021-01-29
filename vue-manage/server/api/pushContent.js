import Express from 'express'
import List from '../../models/list'
import { responseClient } from '../utils'
const router = Express.Router()

router.post('/addLifeData', function (req, res) {
  const {
    name,
    price
  } = req.body
  let tempData = new List({
    name,
    price
  })
  tempData.save().then(data => {
    responseClient(res,200,200,'保存成功',data)
  }).cancel(err=>{
    responseClient(res);
  })
})

router.get('/getLifeData', function (req, res) {
  List.find().then(data => {
    responseClient(res, 200, 0, '请求成功', data)
  }).catch(err => {
    responseClient(res)
  })
})

module.exports = router