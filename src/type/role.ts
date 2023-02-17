export interface ListInt{
  authority:number[],
  roleId:number,
  roleName:string
}
export class InitData{
  list:ListInt[] = [
    {authority:[2], roleId:1,roleName:'管理员'},
    {authority:[4,5,6], roleId:2,roleName:'普通用户'}
  ]
}