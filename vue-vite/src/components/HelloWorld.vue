<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  created() {
    let a = this.add(24, 3, 3)
    console.log(typeof (a))
  },
  methods: {
    add(x: string, y: string) :string {
      console.log(typeof(x), typeof(y))
      return x + y
    }
  }
}
</script>
