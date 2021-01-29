<template>
  <div class="common-box">
    <div id="editorSection"></div>
  </div>
</template>

<script>
import Editor from '@toast-ui/editor' /* ES6 */
import 'codemirror/lib/codemirror.css' // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style

export default {
  name: 'markdownEdit',
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
        height: '500px',
        initialEditType: 'markdown',
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
