<template>
  <!--单个物体： 椭圆-->
  <div id="app">
    <div>@</div>
    <div class="circle">
      <div class="avator">
        <span class="text">1</span>
      </div>
    </div>
    <div class="circle-2">
      <div class="avator">
        <span class="text">2</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  margin: 100px;
}
.circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid gray;
  transform: rotateX(300deg) rotateY(25deg);
  position: relative;
  top: -65px;
  left: -44px;
  .avator {
    display: inline-block;
    transform-origin: 50px 50px;
    animation: keyDot 4s linear infinite;
    .text {
      display: inline-block;
      animation: reverseDot 4s linear infinite;
    }
  }
}
@keyframes keyDot {
  to  { transform: rotate(1turn); }
}
@keyframes keyDot2 {
  to  { transform: rotate(1turn); }
}
.circle-2{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid gray;
  position: relative;
  top: -215px;
  left: -85px;
  transform: rotateX(310deg) rotateY(360deg);
  .avator {
    display: inline-block;
    transform-origin: 100px 100px;
    animation: keyDot2 5s linear infinite;
    .text {
      display: inline-block;
      animation: reverseDot2 5s linear infinite;
      position: relative;
      top: 25px;
    }
  }
}

@keyframes reverseDot {
  from  { transform: rotate(1turn); }
}
@keyframes reverseDot2 {
  from  { transform: rotate(1turn); }
}
</style>
