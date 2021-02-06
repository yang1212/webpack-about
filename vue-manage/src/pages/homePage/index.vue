<template>
  <div class="common-box">
    <p>图像测试</p>
    <el-upload
      class="upload-demo"
      :action="uploadUrl"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
  </div>
</template>

<script>
import { sumbitImgData } from './server'

export default {
  name: 'homePage',
  data () {
    return {
      uploadUrl: '',
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    beforeUpload (file) {
      console.log(1, file)
      let fd = new FormData()
      fd.append('file', file)
      fd.append('name', file.name)
      fd.append('uid', file.uid)
      console.log(34, fd)
      sumbitImgData(fd).then(res => {
        console.log(1, res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.common-box {
}
</style>
