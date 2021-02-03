<template>
  <div class="common-box">
    <div id="editorSection"></div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css' // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style
import Editor from '@toast-ui/editor' /* ES6 */

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
        previewStyle: 'vertical'
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
