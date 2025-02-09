// index.js
const defaultAvatarUrl ="https://image-bed.obs.cn-north-4.myhuaweicloud.com/logo.png"

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    responseData: "" // 存储从后端获取的数据
  },
  // 点击按钮时触发的函数
  getData: function() {
    wx.request({
      url: 'http://192.168.3.16:5050/',  // 后端接口地址
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
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  
})
