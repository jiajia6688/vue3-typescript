<template>
  <div>
    <el-tree
      :data="list"
      ref="treeRef"
      show-checkbox
      node-key="roleId"
      :default-checked-keys="authority"
      :props="{
        children:'roleList',
        label:'name'
      }"
    />
    <el-button size="small" type="primary" @click="changeSave">确认修改</el-button>
    <el-button size="small" type="primary" @click="changeBack">返回</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { InitData } from '../type/authority'
import { getAuthorityList } from '../request/api'
export default defineComponent({
  setup () {
    const route = useRoute();
    const router = useRouter();
    let obj:any = route.query;
    const data = reactive(new InitData(obj.id,obj.authority.split(',')))
    onMounted(()=>{
      getAuthorityList().then(res=>{
        console.log(res);
      })
    })
    const changeSave = ()=>{
      console.log(data.treeRef.getCheckedKeys().sort(function(a:number,b:number){return a-b}));
      //传递给后端
    }
    const changeBack = ()=>{
      router.push({name:"role"})
    }
    return {...toRefs(data),changeSave,changeBack}
  }
})
</script>

<style scoped>

</style>