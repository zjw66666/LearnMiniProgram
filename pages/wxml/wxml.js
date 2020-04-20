// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好小程序',
    firstname:'xiao',
     lastname:'zhu',
     age: 22,
     nowtime: new Date().toLocaleString(),
     Isactive: false,
     isShow: true,
     score:  40,
     movies:['超人','蜘蛛侠','钢铁侠'],
     nums:[
       [1,2,3,4,5],
       [11,12,34,55],
       [555,666,777]
     ],
     letters:['a','b','c']
  },
   onLoad(){
     setInterval(()=>{
       this.setData({
        nowtime: new Date().toLocaleString(),
       })
     },1000)
    },
    handleClick(){
    
       this.setData({
        Isactive: !this.data.Isactive
       })
   },
   handleSwitchShow(){
     this.setData({
        isShow : !this.data.isShow

      })
    },
    handleIncrement(){
      this.setData({
        score : this.data.score += 10

      })
    },
    numberToFixed(value){
        return value.tofixed(2)
    }

})