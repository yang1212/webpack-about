<template>
  <div class="common-box">
    <el-form :model="createParam" class="form-panel">
      <el-form-item prop="title">
        <el-input v-model="createParam.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item prop="content">
        <markdown-edit ref="markdown" :content="createParam.content"></markdown-edit>
      </el-form-item>
      <el-form-item>
        <el-button size="small" class="save-btn" type="primary" @click="saveData">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addLifeData } from './server'
import markdownEdit from './component/markdownEdit'

export default {
  name: 'addDoc',
  components: {
    markdownEdit
  },
  data () {
    return {
      createParam: {
        title: '',
        content: '',
        parentId: ''
      }
    }
  },
  created () {
  },
  methods: {
    saveData () {
      this.createParam.content = this.$refs.markdown.getMarkdown()
      this.$route.params.id === 'home' ? (this.createParam.parentId = -1) : (this.createParam.parentId = this.$route.params.id)
      if (this.createParam.title) {
        addLifeData(this.createParam).then(res => {
          if (res.resultCode === 200) {
            this.$router.push({
              path: '/pushContent/' + res.data._id
            })
          }
        })
      } else {
        this.$message.error('标题不能为空')
      }
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
