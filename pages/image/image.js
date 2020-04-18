// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    // 从本地相册选择图片或使用相机拍照。
    wx.chooseImage({
      complete: (res) => {
          //console.log(res.tempFilePaths[0]);
          const path = res.tempFilePaths[0];
          this.setData({
            imagePath :path
          })
            
          
      }
    })
  },
  handleImageLoad(){
    console.log('图片加载完成');
  }
  
})