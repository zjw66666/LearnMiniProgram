// pages/scroll/sceoll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleScroll(event){
    console.log("正在滚动",event );
  },
  handleToupper(event){
    console.log("滚动到顶部/左边触发",event );
  },
  handleScrolltoupper(event){
    console.log("距顶部/左边多远时,",event);
  }
})