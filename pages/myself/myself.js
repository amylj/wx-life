// myself.js
//获取应用实例
var app = getApp()
Page({

  data: {
    userInfo: {}
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
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

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  openAccount: function (event) {
    //打开我的账户
    wx.navigateTo({
      url: '../myAccount/myAccount',
    })
  },

  sign: function () {
    //签到功能
    wx.navigateTo({
      url: '../sign/sign',
    })
  },

  

  openOpinion: function () {
    //打开意见反馈
    wx.navigateTo({
      url: '../opinion/opinion',
    })
  },

  aboutUs: function () {
    //打开关于我们
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  },

  openSetting: function () {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },

  openCards: function () {
    wx.navigateTo({
      url: '../card/card',
    })
  }
})
