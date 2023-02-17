<template>
  <div class="home">
   <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4"><img src="../assets/logo.png" class="logo"></el-col>
          <el-col :span="16"><h2>后台管理系统</h2></el-col>
          <el-col :span="4"><span class="quit_logo" style="cursor:pointer" @click="handleBack">退出登录</span></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="active"
            text-color="#fff"
            router
          >
          <!-- router 开启路由模式 -->
            <el-menu-item  v-for="item in list" :index="item.path" :key="item.path">
              <span>{{item.meta.title}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  { useRouter,useRoute } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  setup(){
    const router = useRouter()
    const route = useRoute()
    // console.log(router.getRoutes());
    const list = router.getRoutes().filter(v=>v.meta.isShow)
    // console.log(list);
    const handleBack = ()=>{
      localStorage.removeItem('token')
      router.push('/login')
    }
    return { list,active:route.path,handleBack }
  },
  components: {
    // HelloWorld,
  },
});
</script>
<style lang="scss" scoped>
.el-header{
  height:80px;
  background: #666;
  .logo{
    height: 80px;
  }
  h2, .quit_logo{
    text-align: center;
    height: 80px;
    line-height: 80px;
    color: #fff;
  }
}
.el-aside{
  .el-menu{
    height: calc(100vh - 80px);
  }
}
</style>
