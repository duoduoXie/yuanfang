App({
  onLaunch(){
    //在应用第一次启动时，可以获取用户信息
    console.log("应用第一次启动时触发");
  },
  onShow(){
    //切屏回来会被触发 对应的数据或者页面效果重置
    console.log("应用被用户看到时触发");
  },
  onHide(){
    //暂停或者清除定时器
    console.log("应用被隐藏时触发");
  }
})




