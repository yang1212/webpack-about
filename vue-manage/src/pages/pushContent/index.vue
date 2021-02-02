<template>
  <div class="common-box">
    <div class="tree-list-box">
      <el-tree
        ref="tree"
        node-key="_id"
        :data="treeData"
        :props="defaultProps"
        :load="loadNode"
        @node-click="handleNodeClick"
        lazy
      ></el-tree>
    </div>
    <div>
      <div class="flex_btns">
        <el-button icon="el-icon-edit" @click="updateDoc" size="small">编辑</el-button>
        <el-button icon="el-icon-delete" size="small">删除</el-button>
      </div>
      <div>
        接口获取数据内容
        <div id="viewer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import hljs from 'highlight.js'
import { getLifeData, getList } from './server'

export default {
  name: 'HelloWorld',
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'title',
        isLeaf: 'isLeaf'
      },
      treeData: [],
      content: '',
      selectId: '',
      viewer: null
    }
  },
  created () {
    this.getListData()
  },
  mounted () {
    this.getData(this.$route.params.id)
  },
  methods: {
    getListData () {
      getList({ parentId: -1 }).then(res => {
        if (res.resultCode === 200) {
          this.treeData = res.data
        }
      })
    },
    loadNode (node, resolve) {
      if (node.level > 0) {
        getList({ parentId: node.data._id }).then(res => {
          resolve(res.data)
          this.$nextTick(function () {
            this.$refs.tree.setCurrentKey(this.selectId)
          })
        })
      }
    },
    handleNodeClick (data) {
      this.$router.push({
        path: '/pushContent/' + data._id
      })
      this.selectId = data._id
      this.getData(this.selectId)
    },
    updateDoc () {
      this.$router.push({
        path: '/editDoc/' + this.selectId
      })
    },
    getData (id) {
      this.renderView()
      getLifeData({_id: id}).then(res => {
        res = res.data
        if (res.length > 0) {
          this.content = res[0].content
          this.viewer.setMarkdown(this.content)
        }
      })
    },
    renderView  () {
      this.viewer = new Viewer({
        el: document.querySelector('#viewer'),
        initialValue: this.content,
        plugins: [colorSyntax, [codeSyntaxHighlight, { hljs }]],
        language: 'zh-CN'
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
