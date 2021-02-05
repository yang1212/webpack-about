<template>
  <div class="common-box">
    <div id="editorSection"></div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css' // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style
import Editor from '@toast-ui/editor' /* ES6 */
import defaultOptions from './defaultOptions'

export default {
  name: 'markdownEdit',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editor: null
    }
  },
  computed: {
    editorOptions () {
      const options = Object.assign({}, defaultOptions)
      options.hooks.addImageBlobHook = this.handleUpload
      return options
    }
  },
  created () {
  },
  mounted () {
    this.initEdit()
  },
  methods: {
    // To DO：图片资源不借助托管服务，存储在自身服务器是否可行
    initEdit () {
      this.editor = new Editor({
        el: document.querySelector('#editorSection'),
        initialValue: this.content,
        height: '500px',
        initialEditType: 'markdown',
        language: 'zh-CN',
        previewStyle: 'vertical',
        ...this.editorOptions
      })
    },
    handleUpload (file) {
      // if (!this.beforeUpload(file)) return
      const data = new FormData()
      data.append('file', file)
      console.log(1, file, data)
      // return uploadImgInMd(data).then(res => {
      //   if (res && res.data) callback(encodeURI(res.data), 'image')
      // })
    },
    getMarkdown () {
      return this.editor.getMarkdown()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.common-box {
}
</style>
