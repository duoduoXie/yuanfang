// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Tabs:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      }

    ]
  },
  handleItemChange(e){
   // console.log(e);
    const {index} = e.detail;
    let {Tabs} = this.data;
     //数组遍历
     Tabs.forEach(
       (every,i)=>
        i===index?every.isActive=true:every.isActive=false
     );
      this.setData({
        Tabs
      })
  }
  
})