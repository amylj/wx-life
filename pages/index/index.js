var id,state;
Page({
  data:{    
    tabWidth:'',
    titleDisabled:true,
    contentDisabled:true,
    saveBtnDisabled:true,
    inputValue:'',
    contentValue:'',
    display_new:true,
    display_look:false,
    updateBtnDisabled:false,
    resaveBtnDisabled:true,
    titleBorderOpacity:0.4,
    titleInputOpacity:0.4,
    contentBorderOpacity:0.4,
    contentTextAreaOpacity:0.4,
    btnSaveBorderOpacity:0.4,
    btnUpdateOpacity:1,
    btnResaveOpacity:0.4,
    btnTxt:'保存',
    alertDisplay:'none',
    contentTextAreaHeight:'',
    deleteDisplay:'none'
  },
  newNotePad:function(e){
    wx.redirectTo({
      url: '../../pages/index/index?state=new'
    })
  },
  deleteNotePad:function(){
    wx.showModal({
      title:'删除',
      content:'确认删除日记吗？',
      success:function(res){
        if(res.confirm){
          console.log('确定')
          var title=wx.getStorageSync('title'),content=wx.getStorageSync('content'),dateNow=wx.getStorageSync('dateNow');
          console.log(title+content+dateNow+'　　　'+id)
          title.splice(id-1,1)
          content.splice(id-1,1)
          dateNow.splice(id-1,1)          
          try{
            wx.setStorageSync('title', title)     
            wx.setStorageSync('content', content)
            wx.setStorageSync('dateNow', dateNow)
            wx.showToast({
              title:'删除成功'
            })
            wx.redirectTo({
              url: '../../pages/checkNote/checkNote',
              success: function(res){
                // success
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
            })
          }catch(e){
            console.log(e.message)
          }
          
        }else{
          console.log('取消')
        }
      }
    })
  },
  noteSubmit:function(e){
    if(state=='new'){//如果点击了新建
      console.log("现在点击的功能是保存")
      if(e.detail.value.title.length==0&&e.detail.value.content.length==0){
        this.setData({
          alertDisplay:'block'
        })
      }else{            
        this.setData({
          titleDisabled:true,
          contentDisabled:true,
          saveBtnDisabled:true,
          titleBorderOpacity:0.6,
          titleInputOpacity:0.6,
          contentBorderOpacity:0.6,
          contentTextAreaOpacity:0.6,
          btnSaveBorderOpacity:0.6
        })    
        var title=wx.getStorageSync('title') || [];
        var content=wx.getStorageSync('content') || [];
        var date=new Date();
        var year=date.getFullYear(),month=date.getMonth()+1,day=date.getDate();
        var hour=date.getHours(),minute=date.getMinutes(),second=date.getSeconds();
        var dateNow=year+"年"+month+"月"+day+"日　"+hour+"时"+minute+"分"+second+"秒"
        var dateNowInfo=wx.getStorageSync('dateNow') || [];
        title.unshift(e.detail.value.title);
        content.unshift(e.detail.value.content);
        dateNowInfo.unshift(dateNow);
        try{
          wx.setStorageSync('title', title)     
          wx.setStorageSync('content', content)
          wx.setStorageSync('dateNow', dateNowInfo)
          wx.showToast({
            title:'保存成功'
          })
        }catch(e){
          console.log(e.message)
        }
       
      }
    }
    if(typeof(id)=="string"){
      console.log("现在点击的功能是重新保存")
      if(e.detail.value.title.length==0&&e.detail.value.content.length==0){
        this.setData({
          alertDisplay:'block'
        })
      }else{
          var title=wx.getStorageSync('title') || [],content=wx.getStorageSync('content') || [],dateNowInfo=wx.getStorageSync('dateNow') || [];
          var date=new Date();
          var year=date.getFullYear(),month=date.getMonth()+1,day=date.getDate();
          var hour=date.getHours(),minute=date.getMinutes(),second=date.getSeconds();
          var dateNow=year+"年"+month+"月"+day+"日　"+hour+"时"+minute+"分"+second+"秒"
          console.log(title[id-1]+' '+content[id-1]+'　'+dateNow[id-1])
          title.splice(id-1,1,e.detail.value.title);
          content.splice(id-1,1,e.detail.value.content);
          dateNowInfo.splice(id-1,1,dateNow)
          try{
            wx.setStorageSync('title', title)     
            wx.setStorageSync('content', content)
            wx.setStorageSync('dateNow', dateNowInfo)
            wx.showToast({
              title:'保存成功'
            })
          }catch(e){
            console.log(e.message);
          }
          console.log(title[id-1]+' '+content[id-1]+'　'+dateNow[id-1]);
      }      
    }      
  },
  noteReset:function(){

  },
  titleInputBindfocus:function(){
    this.setData({
      alertDisplay:'none'
    })
    if(typeof(id)=="string"){
      this.setData({
        titleBorderOpacity:1,
        titleInputOpacity:1,
        contentBorderOpacity:1,
        contentTextAreaOpacity:1,        
      })
    }
  },
  contentTextareaBindfocus:function(){
    this.setData({
      alertDisplay:'none'
    })
    if(typeof(id)=="string"){
      this.setData({
        titleBorderOpacity:1,
        titleInputOpacity:1,
        contentBorderOpacity:1,
        contentTextAreaOpacity:1,
        alertDisplay:'none'
      })
    }
  },
  saveNotePad:function(){//保存按钮
    if(state=="new"){
      this.setData({
        titleDisabled:false,
        contentDisabled:false,
        saveBtnDisabled:false,
        
      })
    }
    if(typeof(id)=="string"){             
        this.setData({
          titleBorderOpacity:0.4,
          contentBorderOpacity:0.4,
        })
    }      
  },
  onLoad:function(options){    
    console.log(wx.getStorageSync('title'))
    console.log(wx.getStorageSync('content'))
    console.log(wx.getStorageSync('dateNow'))
    console.log("index:"+options.id); 
    var that=this;
    state=options.state
    if(state=='new'){
      this.setData({
        titleDisabled:false,
        contentDisabled:false,
        saveBtnDisabled:false,
        display_new:true,
        display_look:false,  
        titleBorderOpacity:1,
        titleInputOpacity:1,
        contentBorderOpacity:1,
        contentTextAreaOpacity:1,
        btnSaveBorderOpacity:1,
        btnTxt:'保存' 
      })
    }
    if(typeof(options.id)=="string"){
      this.setData({
        titleDisabled:false,
        contentDisabled:false,
        display_new:true,
        display_look:true,
        saveBtnDisabled:false,
        titleBorderOpacity:1,
        titleInputOpacity:1,
        contentBorderOpacity:1,
        contentTextAreaOpacity:1,
        btnSaveBorderOpacity:1,
        btnTxt:'重新保存',
        deleteDisplay:'block'
      })
    }
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          tabWidth:res.windowWidth/2,
          contentTextAreaHeight:res.windowHeight*0.4
        })
      }
    })
    id=options.id;
    var that=this;
    var title=wx.getStorageSync('title');
    var content=wx.getStorageSync('content');
    var titleValue=title[id-1],contentValue=content[id-1];
    this.setData({
        titleValue:titleValue,
        contentValue:contentValue
    })
    
  }
})