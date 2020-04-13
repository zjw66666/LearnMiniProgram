App({

  /**
   * 生命周期函数：后台存活2个小时
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成：onLaunch')
    //异步调用 ->
    wx.getUserInfo({
      //数据拿到之后，再进行回调
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 小程序界面显示出来之后会中心的生命周期函数、会被多次触发
   */
  onShow: function (options) {
    //1.判断小程序的进入场景
    console.log('界面显示出来：onShow')
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }

    //2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递給服务器（这个接口会被放弃）
    wx.getUserInfo({
      complete: (res) => {
        console.log(res)
      },
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时会执行：onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序中发生了一些错误时会执行')
    
  },
  // 第一全局变量
  globalData:{
      name:'zhujiawei',
      age:23
  }
})
