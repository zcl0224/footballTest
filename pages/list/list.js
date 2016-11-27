Page({
  data:{
    text:"Page list",
    items:[],
    isHidden:false,
    isInfinitHidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
console.log(options);
  },
  onReady:function(){
    // 页面渲染完成
    var  _this =this;

    wx.request({
      url:"http://datainfo.duapp.com/shopdata/getclass.php",
      success:function(result){
        console.log(result);
        //我们的数据放在了 result.data里面
        // console.log(result.data);
        // this指针改变， 使用外面的this;
        _this.setData({
          items:result.data,
          isHidden:true
        })


      }
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  handleScrollLower:function(){
    // console.log(111);
    this.setData({
      isInfinitHidden:false
    })  
    var _this = this;
    //请求数据
    setTimeout(function(){
      _this.setData({
        isInfinitHidden:true
      }) 
    },2000);
  },
  handleScrollUper:function(){
    console.log("最上面");
  },
  handleTapEvent:function(ev){
     console.log(ev.target.dataset.myclassid);
    wx.setStorageSync('name', ev.target.dataset.myclassid);
    wx.navigateTo({
      //应用内跳转页面， 找到相对路径
      //传数据的方式 ，url?name=value
      url:"../listDetail/listDetail?myId="+ev.target.dataset.myclassid
    })


  }
})