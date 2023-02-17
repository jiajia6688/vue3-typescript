export interface ListInt{
  userId:number,
  id:number,
  title:string,
  introduce:string
}
export interface selectData{
  title:string,
  introduce:string,
  page:number,
  count:number,
  pagesize:number,

}
export class InitData{
  selectData:selectData = {
    title:'',
    introduce:'',
    page:1,
    count:0,
    pagesize:5,
  }
  list:ListInt[] = [  //展示内容的数据
    {id:1,title:'旺仔',introduce:'旺仔旺仔旺仔旺仔旺仔旺仔',userId:1},
    {id:2,title:'纯牛奶',introduce:'纯牛奶纯牛奶纯牛奶纯牛奶纯牛奶',userId:1},
    {id:3,title:'酸奶',introduce:'酸奶酸奶酸奶酸奶酸奶酸奶',userId:1},
    {id:4,title:'真知棒',introduce:'真知棒真知棒真知棒真知棒真知棒',userId:1},
    {id:5,title:'乐事薯片',introduce:'乐事薯片乐事薯片乐事薯片乐事薯片',userId:1},
    {id:6,title:'方便面',introduce:'方便面方便面方便面方便面方便面',userId:1},
    {id:7,title:'香肠',introduce:'香肠香肠香肠香肠香肠香肠香肠',userId:1},
    {id:8,title:'瓜子',introduce:'瓜子瓜子瓜子瓜子瓜子瓜子瓜子瓜子',userId:1},
    {id:9,title:'烤鱼片',introduce:'烤鱼片烤鱼片烤鱼片烤鱼片烤鱼片烤鱼片',userId:1},
    {id:10,title:'香烟',introduce:'香烟香烟香烟香烟香烟香烟香烟香烟香烟香烟',userId:1},
    {id:11,title:'啤酒',introduce:'啤酒啤酒啤酒啤酒啤酒啤酒啤酒啤酒啤酒啤酒',userId:1},
  ]
}