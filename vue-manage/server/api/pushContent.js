import Express from 'express'
import List from '../../models/list'
import Counter from '../../models/counter'
import { responseClient } from '../utils'
const router = Express.Router()

router.post('/addLifeData', function (req, res) {
  const { title, content } = req.body
  Counter.findOneAndUpdate( {_id: 'productid' }, { $inc:{sequence_value:1} }, {"new":true}, (err, docs)=> {
    if(err) return err;
    const tempData = new List({
      _id: docs.sequence_value,
      title,
      content,
    })
    tempData.save().then(data => {
      responseClient(res,200,200,'保存成功',data)
    }).cancel(err=>{
      responseClient(res)
    })
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