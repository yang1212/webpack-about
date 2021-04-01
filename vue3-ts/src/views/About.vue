<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>  
<script lang="ts">
  import { defineComponent } from "vue"
  interface TempObj {
    num: number,
    testFn(this: TempObj): number
  }

  export default defineComponent({
    name: "About",
    data() {
      return {
        num: 3
      }
    },
    created() {
      let tempObj: TempObj = {
        num: 5,
        testFn():number{
          return this.num
        }
      }
      const a = tempObj.testFn()
      console.log(a)
    },
    methods: {
    }
  })
</script>
