Page({
  data:{
    text:"Page listDetail",
    isHidden:false,
    items:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);

    this.getDetail(options.myId);
  },

  getDetail:function(id){
    var _this = this;
    wx.request({
      url:"http://datainfo.duapp.com/shopdata/getGoods.php",
      data:{classID:id},
      success:function(result){
        // console.log(result.data);
        //接口是jsonp接口，我自己截取字符串
        var str  =result.data.split("callback(");
        var jsondata = "";
        if(str.length>1){
          jsondata = str[1].substring(0,str[1].length-1);
          //请求数据，改变调用setData改变视图层
          _this.setData({
            items:JSON.parse(jsondata),
            isHidden:true
          })
        }
      }
    })
  },

  onReady:function(){
    // 页面渲染完成

    //存储数据方法wx.getStorageSync
    var value= wx.getStorageSync('name');
    console.log(value);
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