// pages/Clock/Clock.js
const moment = require("../../utils/moment.min")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        motime: "",
        fanzhuan: "",
        alpha: "",
        beta: "",
        gamma: "",
        isReversal: true
    },
    gettime() {
        moment.locale("zh-cn");
        // console.log(moment().format("hh:mm:ss"))
        let motime = moment().format("HH:mm:ss");
        this.setData({
            motime
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.startDeviceMotionListening({
            interval: 'normal',
            success: function(res) {
                console.log('设备方向监听成功', res)
            },
            fail: function(res) {
                console.log('设备方向监听失败', res)
            }
        })
        let that = this
        wx.onDeviceMotionChange(function(res) {
            console.log('设备方向数据变化', res)
                // let alpha = res.alpha
                // let beta = res.beta
            let gamma = res.gamma;
            if (gamma <= 0) {
                that.setData({
                    isReversal: false
                })
            } else {
                that.setData({
                    isReversal: true
                })
            }
        })

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
        setInterval(() => {
            this.gettime()
        }, 1000)
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