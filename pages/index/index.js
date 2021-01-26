// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:""
  },
  handle(e){
//console.log(e);
//console.log(e.detail.value);
let gender = e.detail.value;
this.setData({
  gender
})

  }

})