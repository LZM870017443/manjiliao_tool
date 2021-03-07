Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
    },
    /**
     * 生命周期函数--监听页面加载
     */
    // handerUserInfo(e) {
    //     // console.log(e)
    //     const userInfo = e.detail.userInfo;
    //     wx.setStorageSync("userInfo", userInfo);
    //     this.onLoad()
    // },
    // forget() {
    //     if (this.data.userInfo.nickName) {
    //         this.setData({
    //             userInfo: {}
    //         });
    //         wx.setStorageSync("userInfo");
    //         this.onLoad();
    //         wx.showToast({
    //             title: '成功退出',
    //             icon: 'none',
    //             image: '',
    //             duration: 1500,
    //             mask: false,
    //         });

    //     } else {
    //         wx.showToast({
    //             title: '请先登入',
    //             icon: 'none',
    //             image: '',
    //             duration: 1500,
    //             mask: false,
    //         });
    //     }
    // },

    onLoad: function(options) {
        const userInfo = wx.getStorageSync("userInfo");
        this.setData({ userInfo });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})