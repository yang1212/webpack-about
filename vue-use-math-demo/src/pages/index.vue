<template>
  <div class="hello-box">
    123
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    // 块级作用域对外：形成了自己独立的区间，不同于用var定义变量，达到全局共享
    // for (let i = 0; i < 10; i++) {
    //   console.log('a')
    // }
    // console.log(i)
    // 块级作用域对内: i值形成了自己的块作用域
    // for (let i = 0; i < 10; i++) {
    //   console.log(2, i)
    //   setTimeout(() => {
    //     console.log(i)
    //   }, 0)
    // }
    let arr = []
    for (let i = 0; i < 6; i++) {
      arr[i] = function () {
        console.log(i)
      }
    }
    arr[0]()
    arr[1]()
  },
  methods: {
    toFixedFn (val, n) {
      if (!val) { return val }
      const value = val.toString()
      const haveDot = value.includes('.')
      if (!haveDot) { return val }
      val = value.split('.')[0] + '.' + value.split('.')[1].slice(0, n)
      return Number(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
