import Express from 'express'
import List from '../../models/list'
import Counter from '../../models/counter'
import { responseClient } from '../utils'
const router = Express.Router()

router.post('/addLifeData', function (req, res) {
  const { title, content, parentId } = req.body
  Counter.findOneAndUpdate( {_id: 'productid' }, { $inc:{sequence_value:1} }, {"new":true}, (err, docs)=> {
    if(err) return err;
    const tempData = new List({
      _id: docs.sequence_value,
      title,
      content,
      parentId
    })
    tempData.save().then(data => {
      responseClient(res,200,200,'保存成功',data)
    }).cancel(err=>{
      responseClient(res)
    })
  })
})

router.post('/getLifeData', function (req, res) {
  const { _id } = req.body     
  List.find({'_id': _id }).then(data => {
    responseClient(res, 200, 0, '请求成功', data)
  }).catch(err => {
    responseClient(res)
  })
})

router.post('/getList', function(req, res) {
  const { parentId } = req.body
  List.find({'parentId': parentId}).then(data => {
    responseClient(res, 200, 200, '请求成功', data);
  }).catch(err => {
    responseClient(res)
  })
})

router.post('/delLifeData', (req, res) => {
  const { id } = req.body;
  List.remove({_id: id})
    .then(result => {
        if (result.result.n === 1) {
            responseClient(res, 200, 0, '删除成功', result)
        } else {
            responseClient(res, 200, 1, '不存在', result)
        }
    }).cancel(err => {
        responseClient(res);
    })
})


module.exports = router