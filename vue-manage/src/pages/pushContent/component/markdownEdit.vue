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
import { sumbitImgData } from '../imgServer'

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
      editor: null,
      pathTest: ''
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
      let fd = new FormData()
      fd.append('file', file)
      fd.append('name', file.name)
      fd.append('uid', file.lastModified)
      console.log(1, file, fd)
      return sumbitImgData(fd).then(res => {
        console.log(2, res)
        this.pathTest = res.data.path
        // if (res && res.data) callback(encodeURI(res.data), 'image')
      })
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
