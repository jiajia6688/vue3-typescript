export interface ListInt{
  name:string,
  roleId:number,
  roleList?:ListInt[],
  viewRole?:string
}

export class InitData{
  id:number
  authority:number[]
  constructor(id:number,authority:number[]){
    this.id = id
    this.authority = authority
  }
  list:ListInt[] = [
    {
      name:'订单详情',
      roleId:1,
      roleList:[
        {name:'查看',roleId:2},
        {name:'删除',roleId:3},
      ],
      viewRole:''
    },
    {
      name:'商品列表',
      roleId:4,
      roleList:[
        {name:'查看',roleId:5},
        {name:'删除',roleId:6},
      ],
      viewRole:''
    },
    {
      name:'用户列表',
      roleId:7,
      roleList:[
        {name:'查看',roleId:8},
        {name:'删除',roleId:9},
      ],
      viewRole:''
    }
  ]
  treeRef:any
}

