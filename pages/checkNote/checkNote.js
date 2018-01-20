var titleNum=100;
var pageData={}
pageData.data={}
for(var i=1;i<titleNum+1;++i){
  (function(index){    
    pageData['bindtap'+index]=function(e){
      wx.redirectTo({
        url: '../../pages/index/index?id='+index      
      })
      console.log(i)
    }    
  })(i)
}
pageData.data['notePad']=[
  {title:'',updateTime:''}
];pageData.data['titleTxtWidth']='',pageData.data['titlePicWidth']='';pageData.data['windowWidth']='';
pageData.data['titleNum']=1;pageData.data['checkNotePadHeight']=''
pageData['onLoad']=function(){
  var that=this;     
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          titleTxtWidth:res.windowWidth*0.9,
          titlePicWidth:res.windowWidth*0.1,
          tabWidth:res.windowWidth/3,
          checkNotePadHeight:res.windowHeight-80
        })
      }
    })
    var title=wx.getStorageSync('title') || []
    var updateTime=wx.getStorageSync('dateNow')
    var notePad=[]
    for(var i=0;i<title.length;i++){
      notePad[i]={title:title[i],updateTime:updateTime[i]}
    }
    this.setData({
      notePad:notePad
    })
    console.log(this.data.title)
}
pageData['onShow']=function(){
  console.log('onShow');
  var title=wx.getStorageSync('title') || []
  titleNum=title.length;
  console.log('onShow:'+titleNum)
}
Page(pageData)
