import mongoose from 'mongoose'
import counterSchema from '../schemas/counter'
// model, 由Schema发布生成的模型，具有抽象属性和行为的数据库操作对
module.exports = mongoose.model('Counter', counterSchema);