export interface ListInt{
  id:number,
  nickName:string,
  role:RoleInt[],
  userName:string
}
interface RoleInt{
  role:number,
  roleName:string
}
interface selectDataInt{
  role:number,
  nickName:string
}
interface RoleListInt{
  authority:number[],
  role:number,
  roleName:string
}
interface ActiveInt{
  id:number,
  nickName:string,
  role:number[],
  userName:string
}
export class InitData{
  selectData:selectDataInt = {
    role:0,
    nickName:''
  }
  list:ListInt[] = [  //用户列表内容的数据
    {
      id:1,
      nickName:'小明',
      role:[{role:1,roleName:'管理员'},{role:2,roleName:'普通用户'}],
      userName:'小明'
    },
    {
      id:2,
      nickName:'小红',
      role:[{role:1,roleName:'管理员'}],
      userName:'小红'
    },
    {
      id:3,
      nickName:'小绿',
      role:[{role:2,roleName:'普通用户'}],
      userName:'小绿'
    }
  ]
  roleList:RoleListInt[] = [
    {authority:[1,2,3], role:1,roleName:'管理员'},
    {authority:[4,5,6], role:2,roleName:'普通用户'}
  ]//角色列表
  isShow=false //对话框显示/隐藏
  activeFrom:ActiveInt={  //选中对象
    id:0,
    nickName:'',
    role:[],
    userName:''
  }
}