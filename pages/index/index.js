//index.js
//获取应用实例
var marqueeContent = new Array(),
  marqueeContent[0] = '<font color="#0000CC"></font>恭喜您抽中iphone7一台'
  marqueeContent[1] = '<font color="#0000CC"></font>恭喜您抽中iphone7一台'
var marqueeInterval = new Array()
var marqueeId = 0
var marqueeDelay = 1000
var marqueeHeight = 24
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView:'1',
    function initMarquee(){
      var str=marqueeContent[0],

 
    }
  },

 

  upper: function (e) {
    console.log(e)
  },
  
  lower: function (e) {
    console.log(e)
  },

  scroll: function (e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})