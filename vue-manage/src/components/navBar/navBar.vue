<template>
  <div class="nav-box">
    <div class="home-tag" @click="chooseLogo"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div>
    <el-menu :default-active="this.$route.path" router mode="horizontal" active-text-color="#178fff" class="nav-list">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        <i class="el-icon-location"></i>
        {{ item.navItem }}
      </el-menu-item>
    </el-menu>
    <el-button class="create-btn" size="small" @click="handleCreate">创建</el-button>
  </div>
</template>

<script>

export default {
  name: 'navBar',
  data () {
    return {
      navList: [
        { navItem: '导航一', name: '/homePage1' },
        { navItem: '导航二', name: '/homePage2' }
      ]
    }
  },
  methods: {
    chooseLogo () {
      this.$router.push({
        path: '/pushContent/home'
      })
    },
    handleCreate () {
      this.$router.push({
        path: '/addDoc'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-box {
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  .home-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
  }
  .nav-list {
    margin-left: 80px;
  }
  .create-btn {
    position: absolute;
    right: 10px;
    top: 15px;
  }
}
</style>
