<template>
  <div class="common-box">
    <div class="tree-list-box">
      <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div></div>
  </div>
</template>

<script>
// import { getFlightDetail, addLifeData } from './server'

export default {
  name: 'HelloWorld',
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [
        {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        },
        {
          label: '一级 2'
        }
      ]
    }
  },
  created () {
    // addLifeData({name: '测试2', price: 25}).then(res => {
    //   console.log(1, res)
    // })
    // getFlightDetail().then(res => {
    //   console.log(2, res)
    // })
  },
  methods: {
    handleNodeClick () {
      console.log(233)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.common-box {
  height: 100%;
}
.tree-list-box {
  width: 200px;
  border-right: 1px solid #e5e5e5;
  color: #3572b0;
  height: 100%;
}
</style>
