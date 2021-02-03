import Express from 'express'
import List from '../../models/list'
import Counter from '../../models/counter'
import { responseClient } from '../utils'
import { connect } from 'mongoose'
const router = Express.Router()

// 新增数据
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

// 查找数据内容
router.post('/getLifeData', function (req, res) {
  const { _id } = req.body     
  List.find({'_id': _id }).then(data => {
    responseClient(res, 200, 200, '请求成功', data)
  }).catch(err => {
    responseClient(res)
  })
})

// 根据父节点ID查找共父节点数据
router.post('/getList', function(req, res) {
  const { parentId } = req.body
  List.find({'parentId': parentId}).then(data => {
    responseClient(res, 200, 200, '请求成功', data);
  }).catch(err => {
    responseClient(res)
  })
})

// 根据ID更新数据
router.post('/updateData', function(req, res) {
  const { _id, title, content } = req.body
  List.update({'_id': _id }, {'title': title, 'content': content}).then(data => {
    responseClient(res, 200, 200, '请求成功', data);
  }).catch(err => {
    responseClient(res)
  })
})

router.post('/delData', (req, res) => {
  const { id } = req.body;
  List.remove({ '_id': id }).then(data => {
    responseClient(res, 200, 200, '删除成功', data)
    }).cancel(err => {
        responseClient(res);
    })
})


module.exports = router