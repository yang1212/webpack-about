<template>
  <div class="common-box">
    <div class="tree-list-box">
      <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div>
      <div class="flex_btns">
        <el-button icon="el-icon-edit" @click="updateDoc" size="small">编辑</el-button>
        <el-button icon="el-icon-delete" size="small">删除</el-button>
      </div>
      <div>接口获取数据内容</div>
    </div>
  </div>
</template>

<script>
import { getLifeData } from './server'

export default {
  name: 'HelloWorld',
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [
        { label: '一级 1',
          id: 1,
          children: [
            { label: '一级1.1', id: 6 }
          ]
        },
        { label: '一级 2', id: 2 },
        { label: '一级 3', id: 3 },
        { label: '一级 4', id: 4 },
        { label: '一级 5', id: 5 }
      ],
      selectId: ''
    }
  },
  created () {
    // addLifeData({name: '测试2', price: 25}).then(res => {
    //   console.log(1, res)
    // })
    getLifeData().then(res => {
      console.log(2, res)
    })
  },
  methods: {
    handleNodeClick (data) {
      this.$router.push({
        path: '/pushContent/' + data.id
      })
      this.selectId = data.id
    },
    updateDoc () {
      this.$router.push({
        path: '/editDoc/' + this.selectId
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.common-box {
  height: 100%;
  display: flex;
  .tree-list-box {
    width: 200px;
    border-right: 1px solid #e5e5e5;
    color: #3572b0;
    height: 100%;
  }
  .flex_btns{
    position: fixed;
    right: 20px;
    top: 80px;
    background-color: #ffffff;
    /deep/ .el-button{
      border: none;
      color: #178fff;
    }
    /deep/ .el-dropdown{
      color: #178fff;
    }
  }
}
</style>
