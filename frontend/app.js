// app.js
App({
  data: {
    responseData: ""
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  getData: function() {
    wx.request({
      url: 'http://127.0.0.1:5050/',  // 后端接口地址
      method: 'GET',  // 请求方式
      success: (res) => {
        // 请求成功时的回调
        this.setData({
          responseData: res.data  // 将返回的数据存储到data中，更新页面
        });
      },
      fail: (err) => {
        // 请求失败时的回调
        console.error("请求失败", err);
        this.setData({
          responseData: "请求失败"  // 请求失败时的提示
        });
      }
    });
  },
})
