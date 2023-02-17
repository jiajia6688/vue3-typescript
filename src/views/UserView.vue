<template>
  <div>
    <div class="select_box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="selectData.nickName" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="selectData.role" class="m-2" placeholder="请选择">
            <el-option label="全部" :value="0" />
            <el-option
              v-for="item in roleList"
              :key="item.role"
              :label="item.roleName"
              :value="item.role"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="nickName" label="姓名" width="180" />
      <el-table-column prop="role" label="角色" >
        <template #default="scope">
          <el-button v-for="item in scope.row.role" :key="item.role" link size="small">{{item.roleName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column  label="操作" >
        <template #default="scope">
          <!-- <el-button link type="primary" size="small" @click="handleClick">Detail</el-button> -->
          <el-button type="primary" size="small"  @click="handleEdit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="isShow" title="编辑信息">
    <el-form :model="activeFrom" label-width="130px">
      <el-form-item label="姓名">
        <el-input v-model="activeFrom.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="activeFrom.role" multiple class="m-2" style="width:70%" placeholder="请选择">
          <el-option
            v-for="item in roleList"
            :key="item.role"
            :label="item.roleName"
            :value="item.role"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="handleSave">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs,watch } from 'vue'
// import { getRoleList,getUserList } from '../request/api'
import {InitData,ListInt} from '../type/user'
export default defineComponent({
  setup () {
    const data = reactive(new InitData())
    const oldData = JSON.parse(JSON.stringify(data.list));
    onMounted(()=>{
      getUser();
      getRole();
    })
    const getUser = ()=>{
      // getUserList().then(res=>{
      //   console.log(res)
      //   data.list = res.data;
      // })
    }
    const getRole = ()=>{
      // getRoleList().then(res=>{
      //   console.log(res)
      //   data.roleList = res.data;
      // })
    }
    // 查询
    const onSubmit = ()=>{
      let arr:ListInt[] = [];
      if(data.selectData.nickName || data.selectData.role){
        if(data.selectData.nickName){
          arr = data.list.filter((v)=>{
            return v.nickName.indexOf(data.selectData.nickName) !== -1
          })
        }
        if(data.selectData.role){
          arr = (data.selectData.nickName ? arr : data.list).filter((v)=>{
            return v.role.find(item=>item.role == data.selectData.role)
          })
        }
      }else{
        arr = data.list
      }
      data.list = arr
    }
    // 监听
    watch([()=>data.selectData.nickName,()=>data.selectData.role],()=>{
      if(data.selectData.nickName == '' || data.selectData.role == 0){
        // getUser()
        data.list = oldData
      }
    })
    const handleEdit = (row:ListInt)=>{
      console.log(row);
      data.isShow = true
      data.activeFrom = {
        id: row.id,
        nickName: row.nickName,
        role: row.role.map(val=>val.role),
        userName: row.userName
      }
    }
    const handleSave = ()=>{
      let obj:any = data.list.find(value=>value.id == data.activeFrom.id)
      obj.nickName = data.activeFrom.nickName;
      obj.role = data.roleList.filter(v=>data.activeFrom.role.indexOf(v.role) !== -1);
      data.list.forEach((item,index)=>{
        if(item.id == obj.id){
          data.list[index] = obj
        }
      })
      data.isShow = false;
      data.activeFrom = {
        id: 0,
        nickName: '',
        role: [],
        userName: ''
      }
    }
    return {...toRefs(data),onSubmit,handleEdit,handleSave}
  }
})
</script>

<style scoped>

</style>