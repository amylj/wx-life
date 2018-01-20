var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
  data: {
    tabWidth: '',
  },
  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  onLoad: function (e) {
    var windowWidth = 320;
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          tabWidth: res.windowWidth / 3,
          contentTextAreaHeight: res.windowHeight * 0.4
        })
      }
    })


    try {
      var res = wx.getSystemInfoSync();  
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
 }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '吃喝',
        data: 90,
      }, {
        name: '交通',
        data: 35,
      }, {
        name: '服饰',
        data: 78,
      }, {
        name: '居家',
        data: 63,
      },{
        name: '娱乐',
        data: 78,
      }, {
        name: '通讯',
        data: 78,
      }, {
        name: '学杂',
        data: 78,
      }, {
        name: '旅游',
        data: 78,
      }, {
        name: '人情',
        data: 78,
      }, {
        name: '医疗',
        data: 20,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  }

  
});
