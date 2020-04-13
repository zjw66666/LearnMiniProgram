// pages/home/home.js
//getAPP()获取APP()产生的示例对象
const app = getApp()

const name = app.globalData.name;
const age = app.globalData.age;

Page({
      //  -----------------2.初始化数据---------------
   data:{
    name:'zjw',
    age:'18',
    students: [
        {id:111,name:'zjw',age:'23'},
        {id:112,name:'jams',age:'30'},
        {id:113,name:'kuli',age:'29'}
     ],
     counter: 0,
     list:[]
   },
      //  -----------------3.监听页面的发生的事件---------------
   handleBtnClick(){
     //1.错误做法：数据发生了改变，界面是不会刷新的，不像Vue一样
    //   this.data.counter+=1
    //  console.log( this.data.counter)
    //把旧的值给操作完，然后再赋值给新的值
      this.setData({
        counter:this.data.counter+1
      })
   },
   handleSubClick(){
      this.setData({
        counter:this.data.counter-1
      })
   },
   handleGetUserInfo(event){
     console.log(event)
   },
    //  -----------------1.监听页面的生命周期函数---------------
    //页面被加载出来
    onLoad(){
      console.log('onLoad')
      
   },
   //页面显示出来时
   onShow(){
    console.log('onShow')
    const _this=this
    wx.request({
      url: 'http://123.207.32.32:8000/api/h8/recommend',
      // success: (res) => {
      //   console.log(res)
      //   const data = res.data.data.list;
      //   this.setData({
      //     list: data
      //   })
      // }
      success: function(res){
       const data = res.data.data.list;
        _this.setData({
          list: data
        })
      }
    })
  },
   
  //页面初次显示出来
  onReady(){
    console.log('onReady')
  },
 
  onHide(){
    console.log('onHide')
  },
  onUnload(){
    console.log('onUnload')
  },

   //  -----------------4.监听其他事件---------------
   //监听页面的滚动
   onPageScroll(obj){
      console.log(obj)
   },
   //监听页面滚动到顶部
   onReachBottom(){
     console.log('页面滚动到顶部')
   },
   onPullDownRefresh(){
     console.log('下拉刷新的事件')
   }
})