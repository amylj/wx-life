// pages/show/show.js

var app = getApp()

Page({
  data:{
  /* navbar: ['账本', '记账', '统计'],
    currentTab: 0,*/
    tabWidth: '',
    username:'',
    avatarUrl:'',
    money:0,
    incomes:0,
    pay:0,
    BillDisplay:"show",
    AccountBookDisplay:"none",
    newsList:[{
          "id":"10",
          "time":"2017-2-16",
          "month_income":5800,
          "array":[{
            "month_img":"../images/user.png",
            "month_name":"工资",
            "month_money":5800,
            "imgs_br":"11"
          },
          {
            "month_img":"../images/user.png",
            "month_name":"工资",
            "month_money":5800,
            "imgs_br":"22"
          }]
        },
        {
          "id":"10",
          "time":"2017-2-16",
          "month_income":300,
          "array":[{
            "month_img":"../images/user.png",
            "month_name":"工资",
            "month_money":5800,
            "imgs_br":"33"
          },
          {
            "month_img":"../images/user.png",
            "month_name":"工资",
            "month_money":5800,
            "imgs_br":"44"
          }]
        }]

  },

  // statis: function (e) {
  //   wx.navigateTo({
  //     url: '../../../pages/expense/statistics/statistics',
  //   })
  // },

/** */
  // navbarTap: function (e) {
  //   this.setData({
  //     currentTab: e.currentTarget.dataset.idx
  //   })
  // },


/**跳转 */
// jizhang:function(){
// wx.switchTab({
//   url: 'pages/expense/statistics/statistics',
// })
// },
 

  AccountBook:function(){//账本
     this.setData({"BillDisplay":"none"})
     this.setData({"AccountBookDisplay":"show"})
  },
  Bill:function(){//账单
      this.setData({"BillDisplay":"show"})
      this.setData({"AccountBookDisplay":"none"})
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //获取用户信息
    var that = this
    app.getUserInfo(function (userInfo) {
        console.log(userInfo)
         var nickName = userInfo.nickName
         var avatarUrl = userInfo.avatarUrl
         that.setData({avatarUrl:avatarUrl})
         that.setData({username:nickName})
    }),
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            tabWidth: res.windowWidth / 3,
            contentTextAreaHeight: res.windowHeight * 0.4
          })
        }
      })


  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})