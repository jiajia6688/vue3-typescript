<template>
  <div>
    <div class="select_box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="selectData.title" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="selectData.introduce" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="dataList.comList" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="title" label="标题" width="180" />
      <el-table-column prop="introduce" label="详情" />
    </el-table>
    <el-pagination layout="prev, pager, next" @current-change="currentChange" @size-change="sizeChange" :total="selectData.count*2 " />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
// import { getGoodsList } from '../request/api'
import { InitData,ListInt } from '../type/goods'
export default defineComponent({
  setup () {
    const data = reactive(new InitData())
    const oldData = JSON.parse(JSON.stringify(data.list));
    onMounted(()=>{
      getGoods()
    })
    const getGoods = ()=>{    
      // getGoodsList().then(res=>{
      //   console.log(res);
      //   data.list = res.data;
      //   data.selectData.count = res.data.length;
        data.selectData.count = 11;
      // })
    }
    // computed 监听数据改变
    const dataList = reactive({
      comList: computed(()=>{
        return data.list.slice(
          (data.selectData.page - 1) * data.selectData.pagesize,
          data.selectData.page * data.selectData.pagesize
        )
      })
    })
    // 分页
    const currentChange = (page:number)=>{
      data.selectData.page = page
    }
    const sizeChange = (pagesize:number)=>{
      data.selectData.pagesize = pagesize
    }
    // 查询
    const onSubmit = ()=>{
      console.log(data.selectData.title);
      let arr:ListInt[] = [];
      if(data.selectData.title || data.selectData.introduce){
        if(data.selectData.title){
          arr = data.list.filter((v)=>{
            return v.title.indexOf(data.selectData.title) !== -1
          })
        }
        if(data.selectData.introduce){
          arr = data.list.filter((v)=>{
            return v.introduce.indexOf(data.selectData.introduce) !== -1
          })
        }
      }else{
        arr = data.list
      }
      data.selectData.count = arr.length
      data.list = arr
    }
    // 监听输入框的属性
    watch([()=>data.selectData.title,()=>data.selectData.introduce],()=>{
      if(data.selectData.title == '' && data.selectData.introduce == ''){
        // getGoodsList().then(res=>{
        //  data.selectData.count = res.data.length;
        
          data.selectData.count = 11
          data.list = oldData
        // })
      }
    })
    return { ...toRefs(data),...toRefs(oldData),currentChange,sizeChange,dataList,onSubmit}
  }
})
</script>

<style scoped>

</style>