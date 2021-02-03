<template>
  <div class="common-box">
    <el-form :model="createParam" class="form-panel">
      <el-form-item prop="title">
        <el-input v-model="createParam.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item prop="content" v-if="createParam.title">
        <markdown-edit ref="markdown" :content="createParam.content"></markdown-edit>
      </el-form-item>
      <el-form-item>
        <el-button size="small" class="save-btn" type="primary" @click="saveData">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import markdownEdit from './component/markdownEdit'
import { getLifeData, updateData } from './server'

export default {
  name: 'editDoc',
  components: {
    markdownEdit
  },
  data () {
    return {
      createParam: {
        title: '',
        content: ''
      },
      id: this.$route.params.id,
      msg: ''
    }
  },
  created () {
  },
  mounted () {
    this.getData(this.id)
  },
  methods: {
    saveData () {
      this.createParam.content = this.$refs.markdown.getMarkdown()
      updateData({
        _id: this.id,
        title: this.createParam.title,
        content: this.createParam.content
      }).then(res => {
        if (res.resultCode === 200) {
          this.$router.push({
            path: '/pushContent/' + this.id
          })
        }
      })
    },
    getData (id) {
      getLifeData({_id: id}).then(res => {
        if (res.resultCode === 200) {
          const data = res.data[0]
          this.createParam.title = data.title
          this.createParam.content = data.content
        }
        // this.viewer.setMarkdown(this.content)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.common-box {
}
.form-panel {
  width: 95%;
  margin: 20px 0 0 30px;
  /deep/ .el-form-item {
    margin-bottom: 10px;
  }
}
.save-btn {
  float: right;
  margin: 20px 0;
}
</style>
